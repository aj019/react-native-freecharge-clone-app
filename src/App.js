import React from 'react';
import {StyleSheet} from 'react-native';
import {Home} from './containers';
import TabView from 'react-native-scrollable-tab-view';
import Colors from './constants/colors';
export default function App() {
  return (
    <>
      <TabView
        style={styles.bottomBar}
        tabBarTextStyle={styles.tabText}
        tabBarActiveTextColor={Colors.primaryColor}
        tabBarInActiveTextColor="#000"
        tabBarUnderlineStyle={{
          width: 0,
        }}
        tabBarPosition="bottom">
        <Home tabLabel="Home" />
        <Home tabLabel="Reminders" />
        <Home tabLabel="Pay Merchant" />
        <Home tabLabel="Offers" />
        <Home tabLabel="Account" />
      </TabView>
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
