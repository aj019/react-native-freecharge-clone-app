import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/colors';

function ActionButtons(props) {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    text: {
      color: Colors.white,
    },
    imageContainer: {
      width: 70,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 10,
      borderColor: '#33333311',
      borderRadius: 100,
      backgroundColor: Colors.white,
      marginVertical: 10,
    },
  });

  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Icon name="remove" size={30} color={Colors.primaryColor} />
        </View>
        <Text style={styles.text}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

ActionButtons.defaultProps = {
  title: 'Anuj',
};

export default ActionButtons;
