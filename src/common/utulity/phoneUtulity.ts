const hideNumber = (phoneNumber: string) => {
  const str = phoneNumber; 
  const res = str.slice(5, 11);
  return str.replace(res, '*** **')
}

const formatNumber = (phoneNumber: string) => {
  let str = phoneNumber;
  if(str.charAt(0) !== '0') {
    str = `0${str}`;
  }
  const cleaned = (`${str}`).replace(/\D/g, '');

  const match = cleaned.match(/^(\d{4})(\d{3})(\d{2})(\d{2})$/);

  if (match) {
    return `${match[1]} ${match[2]} ${match[3]} ${match[4]}`
  };
  return ''
}

export { formatNumber, hideNumber };