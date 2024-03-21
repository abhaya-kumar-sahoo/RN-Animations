import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useAnimatedSensor,
  SensorType,
  withSpring,
} from 'react-native-reanimated';

export const AnimatedSensor = () => {
  const gravity = useAnimatedSensor(SensorType.GRAVITY);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: withSpring(gravity.sensor.value.x * 20)},
        {translateY: withSpring(gravity.sensor.value.y * 20)},
      ],
    };
  });
  const animatedStyle1 = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: withSpring(gravity.sensor.value.x * 10)},
        {translateY: withSpring(gravity.sensor.value.y * 10)},
      ],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.box, animatedStyle]} />
      <Animated.View style={[styles.box, animatedStyle1]} />
      {/* <Animated.View style={[styles.box, animatedStyle]} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#77c593',
    borderRadius: 200,
  },
});
