import React, {ReactNode} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {pallete} from '../../configs/Colors';
import {AppButtonStyles} from './styles';
import {AppButtonTypes} from './type';

const AppButton = ({
  isCentered,
  children,
  onPress,
  disabled = false,
  style,
  type = 'normal',
}: AppButtonTypes) => {
  const Container = ({children}: {children: ReactNode}) => {
    return disabled ? (
      <View pointerEvents={disabled ? 'none' : 'auto'}>{children}</View>
    ) : (
      <>{children}</>
    );
  };

  return (
    <Container>
      <>
        <TouchableOpacity
          activeOpacity={disabled ? 1 : 0.7}
          onPress={onPress}
          style={[
            AppButtonStyles(type, pallete, isCentered, disabled).container,
            style,
          ]}>
          {children}
        </TouchableOpacity>
      </>
    </Container>
  );
};

export default AppButton;
