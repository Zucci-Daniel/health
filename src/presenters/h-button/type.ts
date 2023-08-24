import {ViewStyle} from 'react-native';
import {AppButtonTypes} from '../../reusables/app-button/type';

export type HbuttonTypes = AppButtonTypes & {
  text: string;
  textColor?: string;
  styles?: ViewStyle;
};
