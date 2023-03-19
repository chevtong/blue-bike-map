import * as React from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import {ParkingCard} from '../components/ParkingCard';
import {colors} from '../utils/colors';
import {ActivityIndicator} from 'react-native';
import {useGarageData} from '../utils/hooks/useGarageData';

export const Parkings = () => {
  const {data, isLoading} = useGarageData();

  return (
    <View
      accessible={true}
      accessibilityLabel="List of available parkings."
      style={styles.screenContainer}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => {
            return (
              <ParkingCard
                name={item.name}
                coordinates={item.coordinates}
                availablityPercenatge={item.availablePercentage}
              />
            );
          }}
          keyExtractor={item => item.id}
          ListEmptyComponent={
            <Text
              style={styles.emptyText}
              accessible={true}
              accessibilityLabel="No Available Data">
              No Data
            </Text>
          }
          ListHeaderComponent={
            <Text
              style={styles.title}
              accessible={true}
              accessibilityLabel="Available Bikes:">
              Available Parkings:
            </Text>
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    padding: 10,
  },
  title: {
    paddingVertical: 10,
    fontSize: 20,
    paddingHorizontal: 20,
    fontWeight: '600',
    color: colors.grey,
  },
  emptyText: {
    color: colors.grey,
    padding: 10,
    textAlign: 'center',
  },
});
