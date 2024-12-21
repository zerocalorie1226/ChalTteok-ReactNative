import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';
import MapView, { Circle, Region } from 'react-native-maps';
import * as Location from 'expo-location';
import CurrentLocation from './CurrentLocationButton';
import SeeStorePreviewButton from './SeeStorePreviewButton';
import StorePreview from '../AroundStorePreview';

const Map: React.FC = () => {
  // 현재 위치와 관련된 상태
  const [region, setRegion] = useState<Region>({
    latitude: 37.5665, // 서울의 기본 위도
    longitude: 126.9780, // 서울의 기본 경도
    latitudeDelta: 0.0922, // 확대 정도
    longitudeDelta: 0.0421, // 확대 정도
  });

  const [currentLocation, setCurrentLocation] = useState({
    latitude: 37.5665,
    longitude: 126.9780,
  });

  // 권한 요청 및 초기 위치 설정
  useEffect(() => {
    (async () => {
      // 권한 요청
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('위치 권한 필요', '이 기능을 사용하려면 위치 권한이 필요합니다.');
        return;
      }

      // 현재 위치 가져오기
      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });

      setCurrentLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  // 버튼을 눌렀을 때 현재 위치로 이동하는 함수
  const moveToCurrentLocation = async () => {
    try {
      let location = await Location.getCurrentPositionAsync({});
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01, // 더 좁게 확대
        longitudeDelta: 0.01,
      });

      setCurrentLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    } catch (error) {
      Alert.alert('오류 발생', '현재 위치를 가져오는 중 오류가 발생했습니다.');
    }
  };

  return (
    <Container>
      <StyledMapView
        region={region} // 지도의 중심을 state에 따라 동적으로 변경
      >
        {/* 현재 위치를 파란색 원으로 표시 */}
        {/* 테두리 */}
        <Circle
          center={currentLocation}
          radius={40} // 반경 50미터
          strokeColor="rgba(0, 0, 0, 0)" // 테두리를 투명하게 설정
          fillColor="rgba(0, 122, 255, 0.3)" // 반투명 파란색 내부
          zIndex={1} // 레이어 순서
        />
        {/* 두번째 원 */}
        <Circle
          center={currentLocation}
          radius={25} // 반경 25미터
          strokeColor="rgba(0, 0, 0, 0)" // 테두리를 투명하게 설정
          fillColor="rgba(255, 255, 255, 1)" // 반투명 파란색 내부
          zIndex={2} // 레이어 순서
        />
        {/* 첫번째 원 */}
        <Circle
          center={currentLocation}
          radius={20} // 반경 20미터
          strokeColor="rgba(0, 0, 0, 0)" // 테두리를 투명하게 설정
          fillColor="rgba(0, 122, 255, 0.8)" // 반투명 파란색 내부
          zIndex={3} // 레이어 순서
        />
      </StyledMapView>

      {/* 현재 위치로 이동하는 버튼 */}
      <ButtonsContainer>
        <SeeStorePreviewButton/>
        <CurrentLocation onPress={moveToCurrentLocation} />
      </ButtonsContainer>

      {/*  Store Preview Section */}
      <StorePreview/>


    </Container>
  );
};

export default Map;

// Styled Components
const Container = styled.View`
  flex: 1;
`;

const StyledMapView = styled(MapView)`
  width: 100%;
  height: 100%;
`;

const ButtonsContainer = styled.View`
position: absolute;
bottom: 286px; /* StorePreviewSection 위로 올리기 위해 위치 조정 */
right: 20px; /* 화면의 오른쪽에서 20px 떨어짐 */
gap: 10px;
`