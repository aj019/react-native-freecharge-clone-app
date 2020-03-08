import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import Header from './header';
import Offers from './offers';
import Payments from './payments';
import Colors from '../../constants/colors';

export default class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Header />
          <Offers />
          <Payments title={'RECHARGE AND BILL PAYMENTS'} />
          <Payments title={'BUY & INVEST'} />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    backgroundColor: Colors.secondaryColor,
  },
  main_header: {
    height: 200,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
