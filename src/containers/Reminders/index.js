import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  NativeModules,
} from 'react-native';
import {TopBar, Button, FeatureButtons} from '../../components';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {add, remove} from '../../actions';
import {connect} from 'react-redux';
import Colors from '../../constants/colors';

const UPI = NativeModules.UPI;
class Reminders extends Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
      modalVisible: false,
    };
  }

  handleTextChange = e => {
    this.setState({
      inputText: e,
    });
  };

  handleAdd = () => {
    if (this.state.inputText !== '') {
      this.props.addItem(this.state.inputText);
      this.setState({
        inputText: '',
        modalVisible: false,
      });
    }
  };

  handleDelete = i => {
    this.props.removeItem(i);
  };

  callUPI = async () => {
    let UpiUrl =
      'upi://pay?pa=anujgupta019@okicici&pn=Anuj%20Gupta&aid=uGICAgICA-um_Cg';
    let response = await UPI.openLink(UpiUrl);
    console.log(response); //however you want to handle response
  };

  render() {
    const {modalVisible, inputText} = this.state;
    return (
      <View style={styles.scrollViewStyle}>
        <Modal transparent animationType={'slide'} visible={modalVisible}>
          <View
            style={{
              flex: 1,
              padding: 20,
              backgroundColor: '#fff',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={[styles.boldText, styles.highlightedText]}>
                Add Reminder
              </Text>
              <Icon.Button
                onPress={() => {
                  this.setState({modalVisible: !modalVisible});
                }}
                name="remove"
                size={30}
                color={Colors.primaryColor}
                backgroundColor="transparent"
              />
            </View>
            <TextInput
              placeholder="Enter Reminder"
              style={styles.input}
              value={inputText}
              onChangeText={this.handleTextChange}
            />
            <TouchableOpacity
              style={styles.buttonTouchable}
              onPress={this.handleAdd}>
              <Text style={styles.buttonTextStyle}> Add Reminder</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonTouchable}
              onPress={() => {
                this.setState({modalVisible: !modalVisible});
              }}>
              <Text style={styles.buttonTextStyle}> Dismiss</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <TopBar>
          <View style={styles.topBarContent}>
            <Text style={styles.textTitle}>Reminders</Text>
            <TouchableOpacity>
              <Icon.Button
                onPress={() => {
                  this.setState({modalVisible: !modalVisible});
                }}
                name="plus"
                size={20}
                color={Colors.white}
                backgroundColor="transparent"
              />
            </TouchableOpacity>
          </View>
        </TopBar>
        <View style={styles.list_container}>
          {this.props.reminders.map((reminder, i) => (
            <View style={styles.reminderCard} key={i}>
              <View style={styles.reminderCardImageContainer}>
                <FeatureButtons title="" />
              </View>
              <View style={styles.reminderCardContent}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: 5,
                  }}>
                  <Text>{reminder}</Text>
                  <Text>Due Date 23 MAR</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <Text>3738473973943</Text>
                    <Text style={styles.highlightedText}>Rs 2500</Text>
                  </View>
                  <View style={styles.buttonsContainer}>
                    <Button
                      title="Pay"
                      borderColor={Colors.green}
                      textColor={Colors.green}
                      marginRight={5}
                      onPress={this.callUPI}
                    />
                    <Button
                      title="Dismiss"
                      borderColor={Colors.grey}
                      textColor={Colors.grey}
                      onPress={() => this.handleDelete(i)}
                    />
                  </View>
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: data => dispatch(add(data)),
    removeItem: data => dispatch(remove(data)),
  };
};

const mapStateToProps = store => {
  console.log(store);
  return store;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Reminders);
