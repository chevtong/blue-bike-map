import React from 'react';
import Tooltip, {TooltipProps} from 'react-native-walkthrough-tooltip';
import {colors} from '../utils/colors';

export const CustomTooltip = ({
  /**
   * When true, tooltip is displayed
   */
  isVisible,
  /**
   * Callback fired when the user taps the tooltip background overlay
   */
  onClose,
  /**
   * Tooltip text
   */
  content,
  /**
   * Content within the component
   */
  children,
}: TooltipProps) => {
  return (
    <Tooltip
      showChildInTooltip={false}
      isVisible={isVisible}
      disableShadow={true}
      content={content}
      placement="top"
      backgroundColor={colors.greyShadow}
      onClose={onClose}>
      {children}
    </Tooltip>
  );
};