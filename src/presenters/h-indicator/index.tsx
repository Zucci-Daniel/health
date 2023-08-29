import React, {FunctionComponent} from 'react';
import {Animated, View} from 'react-native';
import {pallete} from '../../configs/Colors';
import {screenWidth} from '../../configs/Constants';
import {HIndicatorStyles} from './styles';
import {HIndicatorProps} from './type';

const Hindicator: FunctionComponent<HIndicatorProps> = ({
  scrollX,
  data,
  size,
  containerStyle,
  containerWidth = screenWidth,
}) => {
  const colors = pallete;
  const renderData = () => {
    return data?.map((_: any, i: any) => {
      const inputRange = [
        (i - 1) * containerWidth,
        i * containerWidth,
        (i + 1) * containerWidth,
      ]; // next slide // current slide // prev slide
      const opacity = scrollX.interpolate({
        inputRange,
        outputRange: [0.3, 1, 0.3],
        extrapolate: 'clamp',
      });
      const w = scrollX.interpolate({
        inputRange,
        outputRange: [5, 15, 5],
        extrapolate: 'clamp',
      });
      return (
        <Animated.View
          key={`indicator-${i}`}
          style={{
            ...HIndicatorStyles(colors).indicator,
            opacity,
            width: size ? size : w,
            height: size ? size : 5,
          }}
        />
      );
    });
  };
  return scrollX ? (
    <View style={[HIndicatorStyles(colors).indicatorContainer, containerStyle]}>
      {renderData()}
    </View>
  ) : null;
};

export default Hindicator;
