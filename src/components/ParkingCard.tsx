import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../utils/colors';
import openMap from 'react-native-open-maps';
import {Card} from './Card';

interface ParkingCardProps {
  /**
   * Name of the parking garage
   */
  name: string;
  /**
   * Number of availability in percentage
   */
  availablityPercenatge: number;
  /**
   * Coordinate of the garage
   */
  coordinates: number[];
}

export const ParkingCard = ({
  name,
  coordinates,
  availablityPercenatge,
}: ParkingCardProps) => {
  const openLocation = (latitude: number, longitude: number) => {
    openMap({
      provider: 'google',
      latitude: latitude,
      longitude: longitude,
    });
  };

  return (
    <Card
      onPress={() => openLocation(coordinates[0], coordinates[1])}
      title={name}
      accessibilityHint="Press to open in Google Maps.">
      <View style={styles.display}>
        <Icon name={'local-parking'} size={16} color={colors.grey} />
        <Text style={styles.text}>
          Availability: {Math.trunc(availablityPercenatge)}%
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
