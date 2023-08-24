import {StyleSheet} from 'react-native';
import {pallete} from '../../../configs/Colors';
import {screenHeight, screenWidth} from '../../../configs/Constants';

export const onboardingStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingBottom: 50,
    },
    scrollContainer: {
      width: screenWidth,
    },
    title: {
      marginBottom: 20,
      textAlign: 'left',
    },

    skipText: {
      fontSize: 14,
      color: '#57AAD6',
    },
    paddingTitle: {
      paddingTop: 16,
    },
    buttonWrapper: {
      padding: 16,
    },
    imageContainer: {
      flex: 1,
    },
    captions: {
      paddingHorizontal: 16,
      paddingTop: 30,
    },
    skip: {
      position: 'absolute',
      bottom: screenHeight / 3,
      right: 10,
      color: 'black',
      zIndex: 10000,
      padding: 7,
      paddingHorizontal: 20,
      backgroundColor: pallete.skip,
      borderRadius: 24,
    },
    actionWrapper: {
      flexDirection: 'row',
      width: '35%',
      justifyContent: 'space-between',
    },
    indicator: {width: 20, height: 5},
    indicatorWrapper: {flex: 1},
    bottomContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingTop: 30,
    },
  });
