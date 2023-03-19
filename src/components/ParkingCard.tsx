import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../utils/colors';
import openMap from 'react-native-open-maps';
import {Card} from './Card';

interface ParkingCardProps {
  /**
   * Name of the parking station
   */
  name: string;
  /**
   * Number of availability in percentage
   */
  availablityPercentage: number;
  /**
   * Coordinates of the parking station
   */
  coordinates: number[];
}

export const ParkingCard = ({
  name,
  coordinates,
  availablityPercentage,
}: ParkingCardProps) => {
  const openLocation = (stationCoordinate: number[]) => {
    openMap({
      provider: 'google',
      latitude: stationCoordinate[0],
      longitude: stationCoordinate[1],
    });
  };

  return (
    <Card
      onPress={() => openLocation(coordinates)}
      title={name}
      accessibilityHint="Press to open in Google Maps.">
      <View style={styles.display}>
        <Icon name={'local-parking'} size={16} color={colors.grey} />
        <Text style={styles.text}>
          Availability: {Math.trunc(availablityPercentage)}%
        </Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  display: {
    flexDirection: 'row',
    gap: 5,
    paddingVertical: 5,
  },
  text: {
    color: colors.grey,
  },
});
