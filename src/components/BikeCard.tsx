import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../utils/colors';
import Clipboard from '@react-native-clipboard/clipboard';
import {useState} from 'react';
import {CustomTooltip} from './CustomTooltip';
import {Card} from './Card';

interface BikeCardProps {
  /**
   * Name of the bike station
   */
  name: string;
  /**
   * Number of available bike
   */
  availableBike: number;
  /**
   * Number of bike in use
   */
  bikeInUse: number;
}

export const BikeCard = ({name, availableBike, bikeInUse}: BikeCardProps) => {
  const [showToolTip, setShowTooltip] = useState(false);

  const copyToClipboard = () => {
    Clipboard.setString(name);
    setShowTooltip(true);

    setTimeout(() => {
      setShowTooltip(false);
    }, 1500);
  };

  return (
    <Card
      onLongPress={copyToClipboard}
      iconName={'directions-bike'}
      title={name}
      cardStyle={styles.card}
      accessibilityHint="Long press to copy name.">
      <CustomTooltip
        isVisible={showToolTip}
        onClose={() => setShowTooltip(false)}
        content={
          <View style={styles.tooltip}>
            <Icon name={'content-copy'} size={16} color={colors.grey} />
            <Text style={styles.tooltipText}>Address copied</Text>
          </View>
        }>
        <Text style={styles.instructionText}>
          Long press to copy station name
        </Text>
        <View style={styles.description}>
          <View>
            <Text style={styles.primaryTextTitle}>Available:</Text>
            <Text style={styles.primaryText}>{availableBike}</Text>
          </View>
          <View>
            <Text style={styles.accentTextTitle}>In Use:</Text>
            <Text style={styles.accentText}>{bikeInUse}</Text>
          </View>
          <View>
            <Text style={styles.accentTextTitle}>Total:</Text>
            <Text style={styles.accentText}>{availableBike + bikeInUse}</Text>
          </View>
        </View>
      </CustomTooltip>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    minHeight: 200,
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  instructionText: {
    color: colors.grey,
    fontSize: 12,
    paddingBottom: 10,
    fontStyle: 'italic',
  },
  primaryTextTitle: {
    color: colors.grey,
    textAlign: 'center',
    fontWeight: '600',
  },
  primaryText: {
    color: colors.grey,
    textAlign: 'center',
  },
  accentTextTitle: {
    color: colors.grey,
    textAlign: 'center',
    fontWeight: '600',
  },
  accentText: {
    color: colors.grey,
    textAlign: 'center',
  },
  tooltip: {
    flexDirection: 'row',
    gap: 5,
  },
  tooltipText: {
    color: colors.grey,
  },
});
