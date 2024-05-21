import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors, spacing } from '../utils';
import { RoundedButton } from '../components';

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);

  return (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput style={styles.textInput} label="What would you like to focus on?" mode="outlined" onChangeText={setSubject} />
      <RoundedButton onPress={() => addSubject(subject)} size={50} >+</RoundedButton>
    </View>
  </View>
)};

const styles = StyleSheet.create({
  container: {
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'top',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
});
