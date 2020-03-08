import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function TopBar(props) {
  return (
    <LinearGradient colors={['#F6683F', '#EA8145']}>
      {props.children}
    </LinearGradient>
  );
}
