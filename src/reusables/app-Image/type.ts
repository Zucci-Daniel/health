import {ReactNode} from 'react';
import {ViewStyle} from 'react-native';

interface AppImageProps {
  uri?: string;
  islocal?: boolean;
  localImage?: any;
  emptyImageComponent?: ReactNode;
  mode?: 'cover' | 'contain';
  extraStyles?: Array<ViewStyle> | ViewStyle;
}
export default AppImageProps;
