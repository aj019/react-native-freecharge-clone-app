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
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
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
    flex: 1,
    color: 'white',
  },
  textTitle1: {
    fontSize: 12,
    textAlign: 'center',
    padding: 16,
    color: 'black',
  },
  boldText: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  highlightedText: {
    color: Colors.primaryColor,
  },
  reminderCard: {
    height: 130,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    paddingVertical: 20,
    paddingRight: 20,
    marginTop: 5,
  },
  reminderCardImageContainer: {
    justifyContent: 'flex-start',
  },
  reminderCardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
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
