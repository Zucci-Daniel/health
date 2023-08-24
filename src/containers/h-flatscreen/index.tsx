import React, {FC} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
  View,
} from 'react-native';
import {HflatScreenStyles} from './styles';
import HFlatScreenProps from './type';

const HflatScreen: FC<HFlatScreenProps> = ({
  children,
  extraStyles,
  addPaddingTop = false,
  HeaderComponent,
  refreshable = true,
  refreshing = false,
  onRefresh = () => null,
  ListEmptyComponent,
  ...flatListProps
}) => {
  const handleOperation = () => onRefresh();

  return (
    <KeyboardAvoidingView
      style={HflatScreenStyles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 150 : 30}>
      <View style={HflatScreenStyles.screen}>
        <View style={HflatScreenStyles.container}>
          <FlatList
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={HeaderComponent ? HeaderComponent : null}
            ListEmptyComponent={ListEmptyComponent}
            initialNumToRender={10}
            maxToRenderPerBatch={10}
            windowSize={10}
            keyboardShouldPersistTaps="always"
            refreshControl={
              refreshable ? (
                <RefreshControl
                  tintColor={'white'}
                  refreshing={refreshing}
                  onRefresh={() => handleOperation()}
                />
              ) : (
                <></>
              )
            }
            {...flatListProps}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default HflatScreen;
