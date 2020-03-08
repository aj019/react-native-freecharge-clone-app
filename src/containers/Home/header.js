import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ActionButtons} from '../../components';

export default function Header() {
  const styles = StyleSheet.create({
    main_header: {
      height: 200,
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <LinearGradient
      colors={['#F6683F', '#EA8145']}
      style={styles.linearGradient}>
      <View style={styles.main_header}>
        <ActionButtons title="UPI Send Money" />
        <ActionButtons title="Receive Money" />
        <ActionButtons title="Add Money" />
      </View>
    </LinearGradient>
  );
}
