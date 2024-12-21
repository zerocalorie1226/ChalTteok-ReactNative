// CurrentLocationButton.tsx
import React from 'react';
import styled from 'styled-components/native';

const currentLocationIcon = require('../../assets/Around/currentLocation.png'); // 현재 위치 이미지 불러오기

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
  position: absolute;
  bottom: 286px; /* StorePreviewSection 위로 올리기 위해 위치 조정 */
  right: 20px; /* 화면의 오른쪽에서 20px 떨어짐 */
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  z-index: 4; /* StorePreviewSection보다 위에 위치하기 위해 높은 값 설정 */
`;

const CurrentLocationIcon = styled.Image``;