import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {pallete} from './src/configs/Colors';
import {Hbutton, Hinput} from './src/presenters';
import {storeSliceType} from './src/redux/storeType';

const App: FunctionComponent = () => {
  //take this out of here.
  // const {user} = useSelector((state: storeSliceType) => state.storeReducer);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: pallete.screen,
      }}>
      <Hbutton text="bread" />
      <Hinput />
    </View>
  );
};

export default App;
