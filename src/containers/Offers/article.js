import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import Colors from '../../constants/colors';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
import styles from './styles';

export default function Article({article}) {
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        width: screenWidth,
        height: screenHeight,
        flex: 1,
        position: 'absolute',
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
      }}>
      <Image
        style={{height: 200}}
        source={{
          uri: 'https://assets.indiadesire.com/images/freecharge.jpg',
        }}></Image>
      <View
        style={{
          padding: 15,
        }}>
        <Text style={styles.title}>{article.title}</Text>
        <Text
          style={
            styles.content
          }>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. `}</Text>
      </View>
    </View>
  );
}
