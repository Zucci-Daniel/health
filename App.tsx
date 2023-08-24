import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Platform} from 'react-native';
import {useIgnore} from './src/hooks/useIgnore';
import {NavigationProvider} from './src/routers/navigation';

const App = () => {
  const ignore = useIgnore();

  return (
    <SafeAreaView
      style={{flex: 1, paddingTop: Platform.OS === 'android' ? 0 : 50}}>
      <NavigationProvider />
    </SafeAreaView>
  );
};

export default App;
