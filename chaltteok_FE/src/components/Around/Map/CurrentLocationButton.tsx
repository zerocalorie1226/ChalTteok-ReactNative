// CurrentLocationButton.tsx
import React from 'react';
import styled from 'styled-components/native';

const currentLocationIcon = require('../../../assets/Around/currentLocation.png'); // 현재 위치 이미지 불러오기

interface CurrentLocationButtonProps {
  onPress: () => void;
}

const CurrentLocationButton: React.FC<CurrentLocationButtonProps> = ({ onPress }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <CurrentLocationIcon source={currentLocationIcon} />
    </ButtonContainer>
  );
};

export default CurrentLocationButton;

const ButtonContainer = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

const CurrentLocationIcon = styled.Image``;