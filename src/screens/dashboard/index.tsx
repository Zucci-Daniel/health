import React, {useRef} from 'react';
import {View} from 'react-native';
import {GlobalScreenTypes} from '../../configs/GlobalScreenTypes';
import {HflatScreen, Hscreen} from '../../containers';
import {useSheet} from '../../hooks/useSheet';
import {Hheader, HreminderCard} from '../../presenters';
import {AppSheet} from '../../reusables';
import {DashboardScreenStyles} from './styles';

const DashboardScreen = ({navigation}: GlobalScreenTypes) => {
  const addMedSheetRef = useRef(null);
  const updateMedSheetRef = useRef(null);
  const {closeSheet: closeUpdateSheetRef, openSheet: openUpdateSheetRef} =
    useSheet(addMedSheetRef);
  const {closeSheet, openSheet} = useSheet(addMedSheetRef);

  return (
    <>
      <Hheader
        title="Upcoming Medications"
        text="Add Med"
        onPressLeftAction={() => openSheet()}
      />

      <HflatScreen
        data={[1, 2, 3, 4, 5, 6, 7]}
        keyExtractor={(item, index) => `${item}${index}`}
        renderItem={({item, index}) => <HreminderCard />}
        ItemSeparatorComponent={() => (
          <View style={DashboardScreenStyles.separator} />
        )}
      />
      <AppSheet adjustToContentHeight={true} sheetRef={addMedSheetRef}>
        <View style={DashboardScreenStyles.sheetContainer}></View>
      </AppSheet>
    </>
  );
};

export default DashboardScreen;
