/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {PersistGate} from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import {store} from './src/redux/store';

let persistor = persistStore(store);

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Root);
