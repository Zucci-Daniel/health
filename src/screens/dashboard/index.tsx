import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {GlobalScreenTypes} from '../../configs/GlobalScreenTypes';
import {Hheader} from '../../presenters';

const DashboardScreen = ({navigation}: GlobalScreenTypes) => {
  return (
    <>
      <Hheader
        title="Your medications"
        text="Add Medication"
        onPressLeftAction={() => console.log('ADD')}
      />
    </>
  );
};

export default DashboardScreen;
