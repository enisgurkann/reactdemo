export enum SocialMediaType {
  'facebook',
  'google'
}

export interface SocialMediaButtonProps {
  mediaType: SocialMediaType;

  onClick?: () => void;
}
