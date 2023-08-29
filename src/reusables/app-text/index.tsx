import React from 'react';
import {Text} from 'react-native';
import {AppTextTypes} from './type';

const AppText = ({
  text = 'text',
  color,
  styles,
  numberOfLines = 3,
  cap = false,
  allCaps = false,
}: AppTextTypes) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={[
        styles,
        styles,
        {textTransform: cap ? 'capitalize' : allCaps ? 'uppercase' : 'none'},
      ]}>
      {text}
    </Text>
  );
};

export default AppText;
