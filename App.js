import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { colors } from './src/utils';
import { Focus, Timer, FocusHistory } from './src/features';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [history, setHistory] = useState([]);
  return (
    <>
      {!currentSubject && (
        <SafeAreaView style={styles.container}>
          <Focus addSubject={setCurrentSubject} />
          <FocusHistory history={history} />
        </SafeAreaView>
      )}
      {currentSubject && (
        <SafeAreaView style={[styles.container, styles.altContainer]}>
          <Timer
            focusSubject={currentSubject}
            onTimerEnd={(subject) => {
              setHistory([...history, subject])
            }}
            clearSubject={() => setCurrentSubject(null)}
          />
        </SafeAreaView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.background,
  },
  altContainer: {
    backgroundColor: colors.secondary,
    alignItems: 'center',
  },
});
