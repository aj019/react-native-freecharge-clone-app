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
  return (
    <View
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={styles.container}>
      <Text style={styles.textBold}>{props.title}</Text>
      <View style={styles.buttonContainer}>
        <FeatureButtons />
        <FeatureButtons />
        <FeatureButtons />
        <FeatureButtons />
        <FeatureButtons />
        <FeatureButtons />
        <FeatureButtons />
        <FeatureButtons />
      </View>
    </View>
  );
}
