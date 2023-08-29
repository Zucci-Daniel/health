import {StyleSheet} from 'react-native';

export const AppImageStyles = () =>
  StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    img: {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
    loader: {
      position: 'absolute',
    },
    fill: {
      zIndex: 2,
      overflow: 'hidden',
    },
  });
