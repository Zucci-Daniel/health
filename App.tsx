import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {storeSliceType} from './src/redux/storeType';

const App: FunctionComponent = () => {
  //take this out of here.
  // const {user} = useSelector((state: storeSliceType) => state.storeReducer);

  return <View></View>;
};

export default App;
