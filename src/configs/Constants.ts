import {Dimensions} from 'react-native';

export const {width: screenWidth, height: screenHeight} =
  Dimensions.get('screen');

export const imageFit: any = {
  width: '100%',
  height: '100%',
};

export const BRAND_NAME = 'Health';

export const HIT_SLOP = {top: 20, right: 20, left: 20, bottom: 20};

export const Padding = 16;

const touch = 15;

export const detectTouch = {
  top: touch,
  left: touch,
  right: touch,
  bottom: touch,
};
