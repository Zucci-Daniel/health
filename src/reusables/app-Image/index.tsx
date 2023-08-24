import React, {useState} from 'react';
import {Image, View} from 'react-native';
import {AppImageStyles} from './styles';
import AppImageProps from './type';

const AppImage = ({
  uri,
  islocal = false,
  localImage,
  emptyImageComponent,
  mode = 'cover',
  extraStyles = [],
}: AppImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const onLoad = () => {
    setIsLoading(false);
  };

  return (
    <View style={[AppImageStyles().container, extraStyles]}>
      {uri || localImage ? (
        <>
          <Image
            style={[AppImageStyles().img]}
            source={
              islocal
                ? localImage
                : {
                    uri,
                  }
            }
            resizeMode={mode}
            onLoad={onLoad}
          />
          {/* {isLoading && (
            <View style={[AppImageStyles().fill, StyleSheet.absoluteFill]}>
              <EtSkeleton />
            </View>
          )} */}
        </>
      ) : (
        emptyImageComponent
      )}
    </View>
  );
};

export default AppImage;
