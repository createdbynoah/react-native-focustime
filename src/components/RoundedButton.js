import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { colors } from '../utils';

export const RoundedButton = ({onPress, children, size = 100}) => {
  return (
    <Pressable onPress={onPress} style={({pressed}) => [styles(size).radius, {
      backgroundColor: pressed ? colors.secondary : colors.primary,
      borderColor: pressed ? colors.secondary : colors.primary
    }]} ><Text style={styles(size).text}>{children}</Text></Pressable>
  )
}

const styles = (size) => ({
  radius: {
    borderRadius: size / 2,
    width: size,
    height: size,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.primary,
    borderWidth: 2,
    backgroundColor: colors.primary,
  },
  text: { color: colors.white, fontSize: size / 2.5}
})