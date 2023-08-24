import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from 'react-native';
import {pallete} from '../../../configs/Colors';
import {screenWidth} from '../../../configs/Constants';
import {NavigationType} from '../../../configs/GlobalScreenTypes';
import {onBoardDataProps} from './type';

const img: any =
  'https://cdn.pixabay.com/photo/2023/05/17/08/53/flower-7999465_1280.jpg';

const onBoardingData: onBoardDataProps[] = [
  {
    title: 'Your Health, is your Wealth!',
    subTitle: `Take it seriously or it won't take you seriously!`,
    img: require('../../../assets/images/1.png'),
  },
];

export const useOnboarding = (
  navigation: NavigationType /* TODO: TYPE THIS. */,
) => {
  //
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hidePreviousButton, setHidePreviousButton] = useState(true);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const scrollRef = useRef<ScrollView>(null);
  const colors = pallete;

  useEffect(() => {
    scrollRef?.current?.scrollTo({
      animated: true,
      y: 0,
      x: screenWidth * selectedIndex + 1,
    });
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex == 0) setHidePreviousButton(true);
  }, [selectedIndex]);

  const uptSelectedIndex = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    // width of the viewSize
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    // get current position of the scrollview
    const contentOffset = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.floor(contentOffset / viewSize);
    setSelectedIndex(currentIndex);
  };

  const handleNavigate = () => {
    // navigation.replace(routesNames.createAccount);
    // storeItem(storageNames.IS_APP_LAUNCHED, true);
  };
  //-----

  const handleNext = () => {
    if (selectedIndex + 1 < onBoardingData.length) {
      setHidePreviousButton(false);
      return setSelectedIndex(selectedIndex + 1);
    }
    handleNavigate();
  };

  const handlePrevious = () => {
    if (selectedIndex == 0) {
      setHidePreviousButton(true);
    } else {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  return {
    selectedIndex,
    setSelectedIndex,
    hidePreviousButton,
    setHidePreviousButton,
    scrollX,
    scrollRef,
    uptSelectedIndex,
    handleNavigate,
    handleNext,
    handlePrevious,
    onBoardingData,
    colors,
  };
};
