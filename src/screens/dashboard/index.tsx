import React from 'react';
import {View} from 'react-native';
import {GlobalScreenTypes} from '../../configs/GlobalScreenTypes';
import {HflatScreen, Hscreen} from '../../containers';
import {Hheader, HreminderCard} from '../../presenters';
import {DashboardScreenStyles} from './styles';

const DashboardScreen = ({navigation}: GlobalScreenTypes) => {
  return (
    <>
      <Hheader
        title="Upcoming Medications"
        text="Add Med"
        onPressLeftAction={() => console.log('ADD')}
      />

      <HflatScreen
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item, index) => `${item}${index}`}
        renderItem={({item, index}) => <HreminderCard />}
        ItemSeparatorComponent={() => (
          <View style={DashboardScreenStyles.separator} />
        )}
      />
    </>
  );
};

export default DashboardScreen;
