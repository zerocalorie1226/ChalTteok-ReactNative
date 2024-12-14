import React, { useEffect, useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import MapView, { Marker, Region } from 'react-native-maps';
import * as Location from 'expo-location';

const currentLocation = require('../../assets/Around/currentLocation.png'); // 현재 위치 이미지 불러오기

const Map: React.FC = () => {
  // 현재 위치와 관련된 상태
  const [region, setRegion] = useState<Region>({
    latitude: 37.5665, // 서울의 기본 위도
    longitude: 126.9780, // 서울의 기본 경도
    latitudeDelta: 0.0922, // 확대 정도
    longitudeDelta: 0.0421, // 확대 정도
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
    } catch (error) {
      Alert.alert('오류 발생', '현재 위치를 가져오는 중 오류가 발생했습니다.');
    }
  };

  return (
    <Container>
      <StyledMapView
        region={region} // 지도의 중심을 state에 따라 동적으로 변경
        onRegionChangeComplete={(newRegion: Region) => setRegion(newRegion)} // 지도가 움직일 때 상태 업데이트
      >
        {/* 현재 위치에 마커 추가 */}
        <Marker
          coordinate={{ latitude: region.latitude, longitude: region.longitude }}
          title="현재 위치"
          description="현재 내 위치"
        />
      </StyledMapView>

      {/* 현재 위치로 이동하는 버튼 (이미지 사용) */}
      <ButtonContainer onPress={moveToCurrentLocation}>
        <CurrentLocationIcon source={currentLocation} />
      </ButtonContainer>
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

const ButtonContainer = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
`;

const CurrentLocationIcon = styled.Image`

`;
