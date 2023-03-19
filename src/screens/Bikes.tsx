import {View, Text} from 'react-native';
import React from 'react';
import {useBikeData} from '../utils/hooks/useBikeData';

export const Bikes = () => {
  const {data, isLoading} = useBikeData();
  console.log('bike data:', data);
  return (
    <View>
      <Text>Bikes</Text>
    </View>
  );
};
