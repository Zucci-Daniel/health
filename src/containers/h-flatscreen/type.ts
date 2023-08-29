import {ReactNode} from 'react';
import {ViewStyle, FlatListProps} from 'react-native';

interface HFlatScreenProps extends Omit<FlatListProps<any>, 'children'> {
  children?: ReactNode;
  extraStyles?: ViewStyle;
  addPaddingTop?: boolean;
  HeaderComponent?: JSX.Element;
  background?: string;
  refreshable?: boolean;
  onRefresh?: () => void;
  refreshing?: boolean;
}

export default HFlatScreenProps;
