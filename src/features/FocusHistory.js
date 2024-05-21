import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { colors, fontSizes, spacing } from '../utils';

export const FocusHistory = ({ history }) => {
  
  
  const renderItem = ({item}) => <Text style={styles.item}>{item}</Text>

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Previously focused:</Text>
      {!history || !history.length && <Text style={styles.zeroState}>Add a task to start tracking</Text>}
      <FlatList data={history} renderItem={renderItem} style={styles.list} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  list: {
    marginTop: spacing.lg,
  },
  item: {
    fontSize: fontSizes.md,
    color: colors.text,
    marginTop: spacing.md,
    textAlign: 'center',
  },
  zeroState: {
    fontStyle: 'italic',
    marginTop: spacing.md,
    textAlign: 'center',
  },
  title: {
    color: colors.text,
    fontSize: fontSizes.md,
    textAlign: 'center',
    fontWeight: 'bold',
  }
})