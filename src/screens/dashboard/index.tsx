import React from 'react';
import {GlobalScreenTypes} from '../../configs/GlobalScreenTypes';
import {Hheader, HreminderCard} from '../../presenters';

const DashboardScreen = ({navigation}: GlobalScreenTypes) => {
  return (
    <>
      <Hheader
        title="Upcoming Medications"
        text="Add Med"
        onPressLeftAction={() => console.log('ADD')}
      />
      <HreminderCard />
    </>
  );
};

export default DashboardScreen;
