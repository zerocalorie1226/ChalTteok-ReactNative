import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Map: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* 지도 대신 기본 View로 표시 */}
      <Text style={styles.placeholder}>Map Placeholder</Text>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  placeholder: {
    fontSize: 18,
    color: '#555',
  },
});
