import React from 'react';
import {View, Text, Button, Platform} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export const ExpandBlock = () => {
  const animatedValue = useSharedValue(0);
  const animatedValue1 = useSharedValue(0);
  const handlePress = () => {
    console.log('pressed');
    animatedValue.value = withSpring(Math.random() * 150);
    animatedValue1.value = withSpring(Math.random() * 150);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: animatedValue.value},
        {translateY: animatedValue1.value},
      ],
    };
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={[
          {
            width: 140,
            height: 140,
            backgroundColor: 'cyan',
            borderRadius: 10,
            //   borderRadius: 100,
            marginVertical: 20,
            borderWidth: 1,
            borderColor: 'transparent', // Set border color to transparent
            padding: 10, // Optional: add padding to the box
            shadowColor: 'cyan',
            shadowOffset: {
              width: 10,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 25,
          },
          animatedStyle,
        ]}
      />
      <Button title="Press" onPress={handlePress} />
    </View>
  );
};
