import {View, Text} from 'react-native';
import React from 'react';
import {useGarageData} from '../utils/hooks/useGarageData';

export const Parkings = () => {
  const {data, isLoading} = useGarageData();
  console.log('data:', data);
  return (
    <View>
      <Text>Parkings</Text>
    </View>
  );
};
