import React from 'react';
import { SafeAreaView } from 'react-native';
import Around from './components/Around/AroundMain/Around';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Around />
    </SafeAreaView>
  );
};

export default App;
