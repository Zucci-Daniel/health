import React, {FunctionComponent} from 'react';
import {pallete} from '../../configs/Colors';
import {Typo} from '../../configs/Typography';
import {AppButton} from '../../reusables';
import AppText from '../../reusables/app-text';
import {HbuttonTypes} from './type';

const Hbutton: FunctionComponent<HbuttonTypes> = ({
  text = 'text',
  disabled,
  isCentered,
  onPress,
  styles,
  type = 'normal',
  textColor,
}) => {
  return (
    <AppButton
      type={type}
      style={styles}
      isCentered={isCentered}
      disabled={disabled}
      onPress={onPress}>
      <AppText text={text} styles={Typo(pallete.light).Button} />
    </AppButton>
  );
};

export default Hbutton;
