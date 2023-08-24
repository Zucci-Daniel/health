import {KeyboardType, ViewStyle} from 'react-native';

export type HinputTypes = {
  onClear?: () => void;
  onSearch?: () => void;
  showClose?: boolean;
  value: string;
  editable?: boolean;
  iconPressable?: boolean;
  iconOnPress?: () => void;
  placeHolder: string;
  onChangeText?: any;
  contentContainerStyle?: ViewStyle;
  TextInputStyle?: ViewStyle;
  placeHolderFontSize?: number;
  shouldTranslate?: boolean;
  isJustInput?: boolean;
  multiline?: boolean;
  borderColor?: string;
  onBlur?: () => void;
  onFocus?: () => void;
  valSymbol?: string | undefined;
  borderWidth?: number;
  keyboardType?: KeyboardType;
  autoFocus?: boolean;
  getIsFocused?: (focused: boolean | null) => void;
};
