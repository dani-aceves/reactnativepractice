/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import colors from '../../../assets/theme/colors';

const Input = ({title, secondary, primary, danger, loading, disabled}) => {
  const getBcgColor = () => {
    if (disabled) {
      return colors.grey;
    }
    if (primary) {
      return colors.primary;
    }
    if (danger) {
      return colors.danger;
    }
    if (secondary) {
      return colors.secondary;
    }
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.wrapper, {backgroundColor: getBcgColor()}]}>
      <View style={[styles.loaderSection]}>
        {loading && (
          <ActivityIndicator
            color={primary ? colors.secondary : colors.primary}
          />
        )}
        {title && (
          <Text
            style={{
              color: disabled ? 'black' : 'white',
              paddingLeft: loading ? 5 : 0,
            }}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default Input;
