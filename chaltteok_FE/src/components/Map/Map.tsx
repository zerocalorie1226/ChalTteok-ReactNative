import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Map: React.FC = () => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.5665, // 서울의 위도
          longitude: 126.9780, // 서울의 경도
          latitudeDelta: 0.0922, // 확대 정도
          longitudeDelta: 0.0421, // 확대 정도
        }}
      >
        {/* 마커 추가 (서울의 좌표) */}
        <Marker
          coordinate={{ latitude: 37.5665, longitude: 126.9780 }}
          title="서울"
          description="서울특별시"
        />
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
