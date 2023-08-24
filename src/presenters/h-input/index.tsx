import React, {FunctionComponent, useEffect, useState} from 'react';
import {View, TextInput} from 'react-native';
import {pallete} from '../../configs/Colors';
import {HinputStyles} from './styles';
import {HinputTypes} from './type';

const Hinput: FunctionComponent<HinputTypes> = ({
  value,
  onChangeText,
  multiline,
  onBlur = () => null,
  onFocus = () => null,
  editable,
  autoFocus,
  placeHolder = 'placeholder',
  getIsFocused = focused => focused,
  isJustInput = false,
  keyboardType = 'default',
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const colors = pallete;

  useEffect(() => {
    getIsFocused(isFocused);
  }, [isFocused]);

  return (
    <View style={HinputStyles(colors, isFocused, isJustInput).container}>
      <TextInput
        keyboardType={keyboardType}
        autoCapitalize="none"
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        allowFontScaling={false}
        onFocus={() => {
          setIsFocused(true);
          onBlur();
        }}
        onBlur={() => {
          setIsFocused(false);
          onFocus();
        }}
        editable={editable}
        autoFocus={autoFocus}
        placeholder={placeHolder}
        style={HinputStyles(colors).input}
      />
    </View>
  );
};

export default Hinput;
