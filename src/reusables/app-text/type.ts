import {ReactNode} from 'react';
import {TextStyle} from 'react-native/types';

export type AppTextTypes = {
  text: string | ReactNode;
  color?: string;
  styles?: TextStyle | Array<TextStyle>;
  numberOfLines?: number;
  cap?: boolean;
  allCaps?: boolean;
};
