import React from 'react';
import {GlobalScreenTypes} from '../../configs/GlobalScreenTypes';
import {Hscreen} from '../../containers';
import {Hheader, HreminderCard} from '../../presenters';

const DashboardScreen = ({navigation}: GlobalScreenTypes) => {
  return (
    <>
      <Hheader
        title="Upcoming Medications"
        text="Add Med"
        onPressLeftAction={() => console.log('ADD')}
      />
      <Hscreen hasPadding={false}>
        <HreminderCard />
        <HreminderCard />
        <HreminderCard />
        <HreminderCard />
        <HreminderCard />
        <HreminderCard />
        <HreminderCard />
      </Hscreen>
    </>
  );
};

export default DashboardScreen;
