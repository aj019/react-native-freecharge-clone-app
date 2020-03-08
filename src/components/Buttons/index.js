import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../../constants/colors';
function CustomButton(props) {
  const styles = StyleSheet.create({
    button: {
      borderColor: props.borderColor,
      backgroundColor: Colors.white,
      borderRadius: 5,
      borderWidth: 1,
      padding: 10,
      alignSelf: 'baseline',
      marginRight: props.marginRight,
    },

    text: {
      color: props.textColor,
    },
  });

  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

CustomButton.defaultProps = {
  textColor: Colors.white,
  borderColor: Colors.white,
  backgroundColor: 'transparent',
  title: '',
  marginRight: 0,
};

export default CustomButton;
