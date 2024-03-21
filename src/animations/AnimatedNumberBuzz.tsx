import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Monkey from '../assets/images/Monkey.png';
export const AnimatedNumberBuzz = () => {
  const sharedValue1 = useSharedValue(0);
  const sharedValue2 = useSharedValue(0);
  const sharedValue3 = useSharedValue(0);
  const sharedValue4 = useSharedValue(0);
  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: withSpring(sharedValue1.value * 10)},
        {translateY: withSpring(sharedValue2.value * 10)},
      ],
    };
  });
  const intervalRef = useRef(null);

  const handlePressIn1 = () => {
    intervalRef.current = setInterval(() => {
      sharedValue2.value--;
    }, 100);
  };

  const handlePressIn2 = () => {
    intervalRef.current = setInterval(() => {
      sharedValue1.value--;
    }, 100);
  };

  const handlePressIn3 = () => {
    intervalRef.current = setInterval(() => {
      sharedValue1.value++;
    }, 100);
  };

  const handlePressIn4 = () => {
    intervalRef.current = setInterval(() => {
      sharedValue2.value++;
    }, 100);
  };

  const handlePressOut = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.Image
        source={Monkey}
        style={[{width: 150, height: 150}, animatedTextStyle]}
      />
      <View
        style={{
          position: 'absolute',
          bottom: 60,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            sharedValue2.value--;
          }}
          onPressIn={handlePressIn1}
          onPressOut={handlePressOut}
          style={{
            backgroundColor: '#f57e7e',
            width: 100,
            height: 50,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          <Text style={{color: 'white', fontSize: 36, fontWeight: '900'}}>
            ^
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              sharedValue1.value--;
            }}
            onPressIn={handlePressIn2}
            onPressOut={handlePressOut}
            style={{
              backgroundColor: '#f57e7e',
              width: 100,
              height: 50,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
            }}>
            <Text style={{color: 'white', fontSize: 36, fontWeight: '900'}}>
              {'<'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              sharedValue1.value = 0;
              sharedValue2.value = 0;
            }}
            style={{
              backgroundColor: '#f57e7e',
              width: 100,
              height: 50,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
            }}>
            <Text style={{color: 'white', fontSize: 36, fontWeight: '900'}}>
              =
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              sharedValue1.value++;
            }}
            onPressIn={handlePressIn3}
            onPressOut={handlePressOut}
            style={{
              backgroundColor: '#f57e7e',
              width: 100,
              height: 50,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
            }}>
            <Text style={{color: 'white', fontSize: 36, fontWeight: '900'}}>
              {'>'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {
            sharedValue2.value++;
          }}
          onPressIn={handlePressIn4}
          onPressOut={handlePressOut}
          style={{
            backgroundColor: '#f57e7e',
            width: 100,
            height: 50,
            borderRadius: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 36,
              fontWeight: '900',
              transform: [{rotate: '180deg'}],
            }}>
            {'^'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
