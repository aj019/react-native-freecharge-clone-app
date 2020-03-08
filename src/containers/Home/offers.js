import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Card, Button} from '../../components';
import Colors from '../../constants/colors';

export default function Offers() {
  const styles = StyleSheet.create({
    container: {
      height: 150,
    },
    cardContent: {
      width: 350,
      padding: 10,
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
      justifyContent: 'flex-end',
      marginTop: 10,
    },
  });

  const cards = [
    {
      title: '',
    },
    {
      title: '',
    },
    {
      title: '',
    },
  ];
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      style={styles.container}>
      {cards.map((card, i) => {
        return (
          <Card key={i}>
            <View style={styles.cardContent}>
              <Text>Flat 25% off on Medicine order</Text>
              <Text style={styles.highlightedtext}>
                Get Extra 250rs Freecharge
              </Text>
              <View style={styles.buttonContainer}>
                <Button
                  title="Details"
                  borderColor={Colors.green}
                  textColor={Colors.green}
                  marginRight={5}
                />
                <Button
                  title="Ignore"
                  borderColor={Colors.grey}
                  textColor={Colors.grey}
                />
              </View>
              <Text style={styles.disabledText}>
                Grab Pharmeasy deal at Rs 1
              </Text>
            </View>
          </Card>
        );
      })}
    </ScrollView>
  );
}
