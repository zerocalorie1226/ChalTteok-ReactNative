import React from 'react';
import { SafeAreaView } from 'react-native';
import Search from './components/Around/Around';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Search />
    </SafeAreaView>
  );
};

export default App;
