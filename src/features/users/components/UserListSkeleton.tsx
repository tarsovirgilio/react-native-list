import React, { useEffect, useRef } from 'react';
import { View, Animated } from 'react-native';

export default function UserListSkeleton() {
  const opacity = useRef(new Animated.Value(0.3)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.3,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, []);

  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 12,
          }}
        >
          <Animated.View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#E0E0E0',
              opacity,
            }}
          />

          <Animated.View
            style={{
              marginLeft: 12,
              height: 16,
              width: '60%',
              backgroundColor: '#E0E0E0',
              borderRadius: 4,
              opacity,
            }}
          />
        </View>
      ))}
    </>
  );
}
