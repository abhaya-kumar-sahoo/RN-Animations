import React from 'react';
import {View, Text} from 'react-native';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';
import {ExpandBlock} from './src/animations/ExpandBlock';
import {AdjustBoxSize} from './src/animations/AdjustBoxSize';
import {AnimatedSensor} from './src/animations/AnimatedSensor';
import {AnimatedNumberBuzz} from './src/animations/AnimatedNumberBuzz';

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      {/* <ExpandBlock /> */}
      {/* <AdjustBoxSize /> */}
      {/* <AnimatedSensor /> */}
      <AnimatedNumberBuzz />
    </View>
  );
}
