import React from 'react';
import { Image } from 'react-native';
import styled from 'styled-components/native';
import searchIcon from '../../../assets/Around/search.png';

interface AroundSearchContainerProps {
  text: string;
}

const AroundSearchContainer: React.FC<AroundSearchContainerProps> = ({ text }) => {
  return (
    <>
    <SearchContainer>
      <StyledInput placeholder={text}  placeholderTextColor="#CCCCCC"/>
      <SearchIcon source={searchIcon} />
    </SearchContainer>
    </>
  );
};

export default AroundSearchContainer;

const SearchContainer=styled.View`
  position:relative
`


const StyledInput = styled.TextInput`
  width: 343px;
  height: 48px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 13px 0 13px 42px;
  font-size: 14px;
  background-color: #fff;
  
`;

const SearchIcon = styled.Image`
  position: absolute;
  top: 14px;
  left: 16px;
`