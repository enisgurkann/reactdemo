const removeLastString = (text: string) => text.slice(0, -1);
const phoneNumberRegex = /\d{3}? \d{3}? \d{2}? \d{2}?/;
const otpRegex = /\d{6}/;

const isNumber = (text: string) => {
  const numberRegex = /^\d+$/;
  return numberRegex.test(text);
}

const isPhoneNumber = (text: string) => phoneNumberRegex.test(text)

const normalizeNumber = (text: string) => {
  let normalizedText = '';
  if(isNumber(text)){
    normalizedText = text;
  } else {
    text.split('').forEach((char) => {
      if(isNumber(char)) {
        normalizedText += char;
      }
    })
  }

  return normalizedText;
}

export { normalizeNumber, isNumber, isPhoneNumber, phoneNumberRegex, otpRegex };
