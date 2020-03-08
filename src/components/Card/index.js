import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';
function Card(props) {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: Colors.white,
      borderRadius: 10,
      marginVertical: 10,
      marginLeft: 5,
      alignSelf: 'baseline',
    },
  });

  return <View style={props.style || styles.card}>{props.children}</View>;
}

Card.defaultProps = {
  width: 200,
};

export default Card;
