import React, {FunctionComponent} from 'react';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import {AppSheetTypes} from './type';

const AppSheet: FunctionComponent<AppSheetTypes> = (_props: any) => {
  const {
    enableSlideToClose = true,
    disableBackDrop,
    sheetRef,
    onBackPress,
    modalStyle,
    useButtonText = false,
    snapHeight = 0,
    children,
    showButton = true,
    onPressButton,
    buttonTitle = 'close',
    portal = true,
    topContent,
    ...otherProps
  } = _props;
  const Container = portal ? Portal : React.Fragment;
  return (
    <Container>
      <Modalize
        panGestureEnabled={enableSlideToClose}
        closeOnOverlayTap={disableBackDrop}
        overlayStyle={{backgroundColor: 'rgba(0,0,0,.8)'}}
        keyboardAvoidingOffset={30}
        alwaysOpen={snapHeight}
        scrollViewProps={{
          keyboardShouldPersistTaps: 'always',
          showsVerticalScrollIndicator: false,
        }}
        ref={sheetRef}
        onBackButtonPress={onBackPress}
        modalStyle={modalStyle}
        {...otherProps}>
        {topContent}
        {children}
      </Modalize>
    </Container>
  );
};

export default AppSheet;
