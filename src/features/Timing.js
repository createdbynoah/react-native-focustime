import React from 'react';
import { View, StyleSheet } from 'react-native';

import { RoundedButton } from '../components';
import { spacing } from '../utils';

export const Timing = ({onChangeTime}) => {
  return (
    <>
    <View style={styles.timingButton}>
    <RoundedButton size={64} onPress={() => onChangeTime((val) => val + 5)}>+5</RoundedButton>
    <RoundedButton size={64} onPress={() => onChangeTime((val) => val + 10)}>+10</RoundedButton>
    <RoundedButton size={64} onPress={() => onChangeTime((val) => val + 20)}>+20</RoundedButton>
    <RoundedButton size={64} onPress={() => onChangeTime(0)}>Reset</RoundedButton>
    </View>
    </>
  )
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: spacing.lg,
  }
})