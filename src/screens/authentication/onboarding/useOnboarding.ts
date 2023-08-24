import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
} from 'react-native';
import {screenWidth} from '../../../configs/Constants';
import {useColors} from '../../../hooks/useColor';
import {onBoardDataProps} from './type';

const img: any =
  'https://cdn.pixabay.com/photo/2023/05/17/08/53/flower-7999465_1280.jpg';

const onBoardingData: onBoardDataProps[] = [
  {
    title: 'Skip the queue, with smart in-store pickup',
    subTitle:
      'Shop as much as you like from the comfort of your own home and pick up you’re ready.',
    img: require('./../../../assets/images/1.png'),
  },
  {
    title: 'Getting from the store to your door',
    subTitle:
      'Bringing convenience to your doorstep; reliable and fast delivery services.',
    img: require('./../../../assets/images/1.png'),
  },
  {
    title: 'Exclusive discounts and promotions just for you',
    subTitle:
      'Deals that make you smile: unmissable discounts and promotions up for grabs.',
    img: require('./../../../assets/images/1.png'),
  },
  {
    title: 'Your one-stop destination for quality & variety',
    subTitle: '',
    img: require('./../../../assets/images/1.png'),
  },
];

export const useOnboarding = (navigation: any /* TODO: TYPE THIS. */) => {
  //
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hidePreviousButton, setHidePreviousButton] = useState(true);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const scrollRef = useRef<ScrollView>(null);
  const colors = useColors();

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
