import React, {Component} from 'react';
import {SafeAreaView, ScrollView, View, Text, Image} from 'react-native';
import styles from './styles';
import Colors from '../../constants/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const options = [
  {
    id: 1,
    iconName: 'tasks',
    title: 'My Transactions',
  },
  {
    id: 2,
    iconName: 'support',
    title: 'Help and Support',
  },
  {
    id: 3,
    iconName: 'credit-card-alt',
    title: 'Security Settings',
  },
  {
    id: 4,
    iconName: 'bank',
    title: 'BHIM UPI Settings',
  },
  {
    id: 5,
    iconName: 'id-card',
    title: 'KYC Details',
  },
  {
    id: 6,
    iconName: 'credit-card-alt',
    title: 'Saved Cards',
  },
  {
    id: 6,
    iconName: 'bank',
    title: 'Bank Accounts',
  },
];

function Item(props) {
  return (
    <View style={styles.itemContainer}>
      <Icon name={props.iconName} size={15} color={'#00000066'} />
      <Text style={styles.itemText}>{props.title}</Text>
      <Icon name="chevron-right" size={15} color={Colors.grey} />
    </View>
  );
}

class Account extends Component {
  render() {
    return (
      <SafeAreaView style={styles.scrollViewStyle}>
        <ScrollView>
          <View style={styles.profileContainer}>
            <View style={styles.profileImage}>
              <Image
                source={{
                  uri:
                    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/smartest-dog-breeds-1553287693.jpg?crop=0.671xw:1.00xh;0.167xw,0&resize=640:*',
                }}
                style={styles.image}
              />
              <Text style={{color: Colors.primaryColor}}>Edit Profile</Text>
            </View>
            <View style={styles.profileDetails}>
              <Text>anujgupta@gmail.com</Text>
              <Text>9654018751</Text>
            </View>
          </View>
          {options.map((option, i) => (
            <Item key={i} iconName={option.iconName} title={option.title} />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Account;
