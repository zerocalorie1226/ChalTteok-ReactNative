import React from 'react';
import styled from 'styled-components/native';

interface AroundContainerProps {
  text: string;
}

const AroundContainer: React.FC<AroundContainerProps> = ({ text }) => {
  return <StyledInput placeholder={text} />;
};

export default AroundContainer;

const StyledInput = styled.TextInput`
  width: 300px;
  height: 48px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 8px 16px;
  font-size: 14px;
  background-color: #fff;
`;
