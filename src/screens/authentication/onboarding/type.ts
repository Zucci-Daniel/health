import {ImageSourcePropType} from 'react-native';
import {GlobalScreenTypes} from '../../../configs/GlobalScreenTypes';

export type onBoardDataProps = {
  title: string;
  subTitle: string;
  img: ImageSourcePropType;
};

export type OnboardingTypes = GlobalScreenTypes & {};
