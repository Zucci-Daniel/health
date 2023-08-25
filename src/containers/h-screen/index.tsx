import React from 'react';
import {ScrollView, View} from 'react-native';
import {pallete} from '../../configs/Colors';
import {HScreenStyles} from './styles';
import {HScreenTypes} from './type';

const Hscreen = ({children, hasPadding = true}: HScreenTypes) => {
  const colors = pallete;
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{
        paddingBottom: 100,
      }}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <View style={HScreenStyles(colors, hasPadding).container}>
        {children}
      </View>
    </ScrollView>
  );
};

export default Hscreen;
