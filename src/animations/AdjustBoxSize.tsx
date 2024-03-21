import React from 'react';
import {View, Button} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export const AdjustBoxSize = () => {
  const animatedValue = useSharedValue(140);
  const handlePress = () => {
    animatedValue.value = withSpring(Math.random() * 150);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: animatedValue.value,
      height: animatedValue.value,
    };
  });
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={[
          {
            backgroundColor: '#e75874',
            borderRadius: 10,
            //   borderRadius: 100,
            marginVertical: 20,
            borderWidth: 1,
            borderColor: 'transparent',
            padding: 10,
            shadowColor: '#e75874',
            shadowOffset: {
              width: 10,
              height: 12,
            },
            shadowOpacity: 1,
            shadowRadius: 16.0,

            elevation: 250,
          },
          animatedStyle,
        ]}
      />
      <Button title="Press" onPress={handlePress} />
    </View>
  );
};
