import React from 'react';
import { StyledSocialMediaButton, StyledSocialImage } from './SocialMediaButton.styles';
import facebookIcon from '../../assets/socialMediaIcon/facebook.png';
import googleIcon from '../../assets/socialMediaIcon/google.png';
import { SocialMediaButtonProps, SocialMediaType } from './SocialMediaTypes';

const facebookLabel = 'Facebook ile devam edin';
const googleLabel = 'Google ile devam edin';

export const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({ mediaType, ...props }) => (
  <StyledSocialMediaButton type="button" {...props}>
    <StyledSocialImage src={mediaType === SocialMediaType.facebook ? facebookIcon : googleIcon} />

    {mediaType === SocialMediaType.facebook ? facebookLabel : googleLabel}
  </StyledSocialMediaButton>
);
