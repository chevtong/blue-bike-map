import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../utils/colors';

interface CardProps {
  /**
   * Title for the card
   */
  title: string;
  /**
   * Content within the component
   */
  children: React.ReactNode;
  /**
   * Callback fired when the user taps the card
   */
  onPress?: () => void;
  /**
   * Callback fired when the user long-press the card
   */
  onLongPress?: () => void;
  /**
   * If provided, icon will be shown on the top center of the card
   */
  iconName?: string;
  /**
   * Additional styling for the card
   */
  cardStyle?: ViewStyle;
  /**
   * Additional info for accessibility label
   */
  accessibilityHint?: string;
}

export const Card = ({
  onLongPress,
  onPress,
  iconName,
  title,
  children,
  cardStyle,
  accessibilityHint,
}: CardProps) => {
  const combinedCardStyle = {
    cardStyle,
    ...styles.card,
  };

  return (
    <TouchableOpacity
      style={combinedCardStyle}
      onPress={onPress}
      onLongPress={onLongPress}
      accessible={true}
      accessibilityLabel={title}
      accessibilityHint={accessibilityHint}>
      {iconName && (
        <View style={styles.iconContainer}>
          <Icon name={iconName} size={60} color={colors.primaryBlue} />
        </View>
      )}
      <View style={styles.text}>
        <Text style={styles.title}>{title}</Text>
        {children}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    borderRadius: 8,
    borderTopColor: colors.primaryBlue,
    borderTopWidth: 10,
    shadowColor: colors.shadow,
    shadowOpacity: 0.5,
    shadowRadius: 5.0,
    elevation: 3,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  text: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    color: colors.primaryBlue,
    fontWeight: '600',
  },
});
