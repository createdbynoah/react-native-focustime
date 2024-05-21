import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { ProgressBar, Button } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';


import { Countdown, RoundedButton } from '../components';
import { Timing } from '../features';
import { spacing, colors, fontSizes } from '../utils';

const ONE_SECOND_IN_MS = 1000;

const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
  1 * ONE_SECOND_IN_MS,
];

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();  // keeps device awake while timer is mounted/running
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);

  const handleTimerEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setIsStarted(false);
    setProgress(1);
    reset();
    onTimerEnd(focusSubject);
  }
  return (
    <>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setProgress}
          onEnd={handleTimerEnd}
        />
        <View style={{ paddingTop: spacing.xl }}>
          <Text style={styles.title}>Focusing On:</Text>
          <Text style={styles.task}>{focusSubject}</Text>
        </View>
      </View>
      <View
        style={{
          paddingTop: spacing.sm,
          paddingLeft: spacing.md,
          paddingRight: spacing.md,
        }}>
        <ProgressBar
          color={colors.primary}
          progress={progress}
          style={{ height: spacing.sm }}
        />
      </View>
      <View style={styles.timingWrapper}>
        <Timing onChangeTime={setMinutes} />
      </View>
      <View style={styles.buttonWrapper}>
        {!isStarted && (
          <RoundedButton onPress={() => setIsStarted(true)} size={125}>
            Play
          </RoundedButton>
        )}
        {isStarted && (
          <RoundedButton onPress={() => setIsStarted(false)} size={125}>
            pause
          </RoundedButton>
        )}
      </View>
      <View style={styles.resetBtn}>
        <Button
          mode="outlined"
          onPress={clearSubject}
          textColor={colors.white}
          style={{ borderColor: colors.primary, borderWidth: 2, }}>
          Clear Task
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timingWrapper: {
    flex: 0.1,
    paddingTop: spacing.xxl,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: fontSizes.lg,
  },
  task: {
    color: colors.white,
    textAlign: 'center',
    fontSize: fontSizes.md,
  },
  resetBtn: {
    flex: 0.1,
    maxWidth: 250,
    alignContent: 'center',
  },
});
