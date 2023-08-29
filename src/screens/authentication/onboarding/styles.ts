import {StyleSheet} from 'react-native';
import {Padding, screenHeight, screenWidth} from '../../../configs/Constants';

export const onboardingStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
    },
    wrapper: {flex: 1},
    svgContainer: {
      flex: 1,
      paddingBottom: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    caption: {
      padding: Padding,
      paddingVertical: Padding * 2,
      gap: 20,
    },
  });
