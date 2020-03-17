import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {Home, Reminders, PayMerchants, Account, Offers} from './containers';
import TabView from 'react-native-scrollable-tab-view';
import Colors from './constants/colors';
import store from './store';
import {Provider} from 'react-redux';
export default function App() {
  return (
    <>
      <Provider store={store}>
        <StatusBar
          backgroundColor={Colors.primaryColor}
          barStyle="light-content"
        />
        <TabView
          style={styles.bottomBar}
          tabBarTextStyle={styles.tabText}
          tabBarActiveTextColor={Colors.primaryColor}
          tabBarInActiveTextColor="#000"
          tabBarUnderlineStyle={{
            width: 0,
          }}
          locked={true}
          tabBarPosition="bottom">
          <Home tabLabel="Home" />
          <Reminders tabLabel="Reminders" />
          <PayMerchants tabLabel="Pay Merchant" />
          <Offers tabLabel="Offers" />
          <Account tabLabel="Account" />
        </TabView>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  tabText: {
    fontSize: 10,
    width: 100,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  underline: {
    color: '#000',
  },
});
