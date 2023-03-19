import * as React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import {BikeCard} from '../components/BikeCard';
import {BikeProps} from '../utils/types';
import {colors} from '../utils/colors';
import {useBikeData} from '../utils/hooks/useBikeData';

export const Bikes = () => {
  const {data, isLoading} = useBikeData();

  return (
    <View style={styles.screenContainer}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList<BikeProps>
          data={data}
          renderItem={({item}) => {
            return (
              <BikeCard
                name={item.name}
                availableBike={item.bikeAvailable}
                bikeInUse={item.bikeInUse}
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
              Available Bikes:
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
