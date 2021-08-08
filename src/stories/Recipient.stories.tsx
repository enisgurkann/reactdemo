import { Story, Meta } from '@storybook/react';

import { Recipient, RecipientProps } from '../components/recipient/Recipient';
import { ImageContainer } from '../screens/profile/DeliveryPerson.styles';

import Reliable from '../assets/images/reliable_receiver.png';

export default {
  title: 'Example/Recipient',
  component: Recipient,
} as Meta;

const ReceiverCard: Story<RecipientProps> = (args) => <Recipient {...args} />;

export const Card = ReceiverCard.bind({});

const reliableImage = () => (
  <ImageContainer>
    <img src={Reliable} style={{ width: 77, height: 65 }} alt="reliable" />
  </ImageContainer>
);

Card.args = {
  ImageComponent: reliableImage,
  title: 'Güvenilir Alıcı',
  description: 'Senin adına paketini teslim edebileceğimiz güvendiğin kişiler. Kargon Burada Noktalarından paketlerini sen ve sadece Güvenilir Alıcıların teslim alabilir.',
  buttonLabel: 'Güvenilir Alıcı Ekle',
};
