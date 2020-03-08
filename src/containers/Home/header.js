import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ActionButtons, TopBar} from '../../components';

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
    <TopBar>
      <View style={styles.main_header}>
        <ActionButtons title="Send Money" />
        <ActionButtons title="Receive Money" />
        <ActionButtons title="Add Money" />
      </View>
    </TopBar>
  );
}
