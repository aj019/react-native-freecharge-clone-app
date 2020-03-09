import React, {Component} from 'react';
import {Dimensions} from 'react-native';
import Colors from '../../constants/colors';
const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const styles = {
  scrollViewStyle: {
    flex: 1,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    backgroundColor: Colors.secondaryColor,
  },
  topBarContent: {
    padding: 10,
  },

  input: {
    color: Colors.primaryColor,
    borderColor: Colors.primaryColor,
    borderWidth: 2,
    padding: 5,
    marginTop: 30,
  },

  textTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 16,
    color: 'white',
  },
  textTitle1: {
    fontSize: 12,
    textAlign: 'center',
    padding: 16,
    color: 'black',
  },
  scanCardView: {
    width: deviceWidth - 32,
    height: deviceHeight / 2,
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: 'white',
    padding: 20,
  },
  buttonScan: {
    width: 42,
  },
  descText: {
    padding: 16,
    textAlign: 'justify',
    fontSize: 16,
  },

  highlight: {
    fontWeight: '700',
  },

  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonTouchable: {
    fontSize: 21,
    backgroundColor: Colors.primaryColor,
    marginTop: 32,
    justifyContent: 'center',
    height: 44,
  },
  buttonTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
};
export default styles;
