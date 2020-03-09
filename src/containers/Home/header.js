import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ActionButtons, TopBar} from '../../components';

export default function Header() {
  const styles = StyleSheet.create({
    main_header: {
      height: 150,
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <TopBar>
      <View style={styles.main_header}>
        <ActionButtons iconName="send" title="Send Money" />
        <ActionButtons iconName="money" title="Receive Money" />
        <ActionButtons iconName="plus" title="Add Money" />
      </View>
    </TopBar>
  );
}
