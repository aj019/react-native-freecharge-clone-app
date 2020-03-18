import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Image, StatusBar} from 'react-native';
import {Home, Reminders, PayMerchants, Account, Offers} from './containers';
import TabView from 'react-native-scrollable-tab-view';
import Colors from './constants/colors';
import store from './store';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import pay from './images/pay.png';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar
          backgroundColor={Colors.primaryColor}
          barStyle="light-content"
        />

        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: Colors.primaryColor,
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({color, size}) => {
                return <Icon name="home" color={color} size={size} />;
              },
            }}
          />
          <Tab.Screen
            name="Reminders"
            component={Reminders}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => {
                return <Icon name="clock-o" color={color} size={size} />;
              },
            }}
          />
          <Tab.Screen
            name="Pay Merchants"
            component={PayMerchants}
            options={{
              tabBarLabel: 'Pay Merchants',
              tabBarIcon: ({color, size}) => {
                return <Icon name="qrcode" color={color} size={size} />;
              },
            }}
          />
          <Tab.Screen
            name="Offers"
            component={Offers}
            options={{
              tabBarLabel: 'Offers',
              tabBarIcon: ({color, size}) => {
                return <Icon name="ticket" color={color} size={size} />;
              },
            }}
          />
          <Tab.Screen
            name="Account"
            component={Account}
            options={{
              tabBarLabel: 'Account',
              tabBarIcon: ({color, size}) => {
                return <Icon name="user" color={color} size={size} />;
              },
            }}
          />
        </Tab.Navigator>
      </Provider>
    </NavigationContainer>
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
