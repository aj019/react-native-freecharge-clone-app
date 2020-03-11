import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {FeatureButtons} from '../../components';
import Colors from '../../constants/colors';

export default function Offers(props) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.white,
      padding: 10,
      marginBottom: 10,
    },
    textBold: {
      fontWeight: '700',
      fontSize: 10,
    },
    highlightedtext: {
      color: Colors.primaryColor,
    },
    disabledText: {
      color: Colors.grey,
      fontSize: 12,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      marginTop: 10,
    },
  });

  const rechargeOptions = [
    {
      id: 1,
      title: 'Mobile',
      iconName: 'mobile-phone',
    },
    {
      id: 2,
      title: 'DTH',
      iconName: 'tv',
    },
    {
      id: 3,
      title: 'Electricity',
      iconName: 'lightbulb-o',
    },
    {
      id: 4,
      title: 'Landline',
      iconName: 'phone-square',
    },
    {
      id: 5,
      title: 'Broadband',
      iconName: 'hdd-o',
    },
    {
      id: 6,
      title: 'Insurance',
      iconName: 'bed',
    },
    {
      id: 7,
      title: 'Gas',
      iconName: 'fire-extinguisher',
    },
    {
      id: 8,
      title: 'Water',
      iconName: 'tint',
    },
  ];

  const investOptions = [
    {
      id: 1,
      title: 'Mutual',
      iconName: 'bank',
    },
    {
      id: 2,
      title: 'Deals',
      iconName: 'ticket',
    },
    {
      id: 3,
      title: 'Gift Cards',
      iconName: 'gift',
    },
    {
      id: 4,
      title: 'Google Play',
      iconName: 'play',
    },
    {
      id: 5,
      title: 'Gold',
      iconName: 'hdd-o',
    },
    {
      id: 6,
      title: 'Fixed Deposit',
      iconName: 'bank',
    },
    {
      id: 7,
      title: 'Money',
      iconName: 'cc-diners-club',
    },
    {
      id: 8,
      title: 'Bus Tickets',
      iconName: 'tint',
    },
  ];

  let list =
    props.type === 'recharge' ? [...rechargeOptions] : [...investOptions];

  return (
    <View
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={styles.container}>
      <Text style={styles.textBold}>{props.title}</Text>
      <View style={styles.buttonContainer}>
        {list.map((option, i) => {
          return (
            <FeatureButtons
              key={i}
              title={option.title}
              iconName={option.iconName}
            />
          );
        })}
      </View>
    </View>
  );
}
