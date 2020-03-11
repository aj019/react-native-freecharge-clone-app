import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../constants/colors';

function FeatureButtons(props) {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    text: {
      color: Colors.textPrimaryColor,
      fontSize: 12,
    },
    subText: {
      color: Colors.primaryColor,
      fontSize: 8,
    },
    imageContainer: {
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
      backgroundColor: Colors.secondaryColor,
      marginVertical: 10,
    },
  });
  console.log(props);
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Icon name={props.iconName} size={20} color={Colors.primaryColor} />
        </View>
        <Text style={styles.text}>{props.title}</Text>
        {props.subTitle && <Text style={styles.subText}>{props.subTitle}</Text>}
      </View>
    </TouchableOpacity>
  );
}

FeatureButtons.defaultProps = {
  title: 'Mobile',
  iconName: 'phone',
};

export default FeatureButtons;
