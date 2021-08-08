import React, { FC } from 'react';
import styled from 'styled-components';
import { SearchImg, SearchWrapper } from './SearchInput.styles';
import { TextInput } from './TextInput';
import SearchIcon from '../../assets/icons/searchIcon.svg';

const StyledInput = styled(TextInput)`
  height: 70px;
  border-radius: 35px;
`;

export interface SearchInputProps {
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  searchClick(): void;
  value?: string;
  label?: string;
  error?: string;
  id: string;
}

interface RightElementProps {
  onClick(): void;
}

const RightElement: FC<RightElementProps> = ({ onClick }) => (
  <SearchWrapper onClick={onClick}>
    <SearchImg src={SearchIcon} alt="search icon" />
  </SearchWrapper>
);

export const SearchInput: React.FC<SearchInputProps> = ({ searchClick, onChange, value, label, error, id }) => (
  <StyledInput
    id={id}
    onChange={onChange}
    maxLength={12}
    type="numeric"
    value={value}
    label={label}
    error={error}
    RightElement={<RightElement onClick={searchClick} />}
    isSearchInput={true}
  />
);
