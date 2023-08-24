import React, {FunctionComponent} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity, View} from 'react-native';
import {AppText} from '../../reusables';
import {HHeaderStyles} from './styles';
import {HheaderTypes} from './type';
import {pallete} from '../../configs/Colors';
import {NavigationType} from '../../configs/GlobalScreenTypes';
import {Typo} from '../../configs/Typography';

const Hheader: FunctionComponent<HheaderTypes> = ({
  text = 'Sign in',
  title = '',
  onPressLeftAction = () => null,
  showLeftAction = true,
}) => {
  const navigation: NavigationType = useNavigation();
  const colors = pallete;
  return (
    <View style={HHeaderStyles(colors).container}>
      {title && <AppText text={title} styles={Typo(colors.text).P3} />}
      {showLeftAction ? (
        <TouchableOpacity
          onPress={onPressLeftAction}
          style={HHeaderStyles(colors).button}>
          <AppText text={text} styles={Typo(colors.text).Button} />
        </TouchableOpacity>
      ) : (
        <View style={{flex: 1}} />
      )}
    </View>
  );
};

export default Hheader;