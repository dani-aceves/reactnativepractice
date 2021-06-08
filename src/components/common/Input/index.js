import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles';

const Input = ({onChangeText, style, value, label}) => {
  return (
    <View>
      {label && <Text>{label}</Text>}
      <TextInput
        style={[styles.textInput, style]}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default Input;
