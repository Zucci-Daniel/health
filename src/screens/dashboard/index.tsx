import React from 'react';
import {GlobalScreenTypes} from '../../configs/GlobalScreenTypes';
import {Hheader, HreminderCard} from '../../presenters';

const DashboardScreen = ({navigation}: GlobalScreenTypes) => {
  return (
    <>
      <Hheader
        title="Your medications"
        text="Add Medication"
        onPressLeftAction={() => console.log('ADD')}
      />
      <HreminderCard />
    </>
  );
};

export default DashboardScreen;
