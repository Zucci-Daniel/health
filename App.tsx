import {GestureHandlerRootView} from 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Platform} from 'react-native';
import {useIgnore} from './src/hooks/useIgnore';
import {NavigationProvider} from './src/routers/navigation';
import {ToastProvider} from './src/presenters/h-toast';
import {Host} from 'react-native-portalize';

const App = () => {
  const ignore = useIgnore();

  return (
    <SafeAreaView
      style={{flex: 1, paddingTop: Platform.OS === 'android' ? 0 : 50}}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Host>
          <ToastProvider>
            <NavigationProvider />
          </ToastProvider>
        </Host>
      </GestureHandlerRootView>
    </SafeAreaView>
  );
};

export default App;
