import {Platform, StyleSheet, ViewStyle} from 'react-native';

export const Globalpadding = {
  padding: 16,
};
export const GlobalScreen = {
  padding: 16,
  paddingHorizontal: 10,
  flex: 1,
};

export const GlobalFormHeaders: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'flex-start',
  // paddingBottom: 20,
  gap: 10,
};

export const GlobalHeaderBorder: ViewStyle = {
  borderBottomWidth: 0.5,
  borderBottomColor: 'grey',
};

export const shadowStyles = StyleSheet.create({
  shadow: {
    backgroundColor: 'white', // Set a background color
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    shadowColor: 'rgba(194, 154, 234, 0.5)',
    shadowOpacity: 0.5,
    borderWidth: Platform.OS === 'android' ? 1 : 0,
    borderColor: 'rgba(194, 154, 234, 0.2)',
  },
});

export const shadow = shadowStyles.shadow;
