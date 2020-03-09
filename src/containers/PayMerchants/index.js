import React, {Component, Fragment} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from './scanStyles';
import {
  TouchableOpacity,
  Text,
  StatusBar,
  Linking,
  View,
  TextInput,
  NativeModules,
} from 'react-native';
import {TopBar} from '../../components';
const UPI = NativeModules.UPI;
class PayMerchants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scan: true,
      ScanResult: false,
      result: null,
      inputText: '',
      paymentStatus: '',
    };
  }

  onSuccess = e => {
    const check = e.data.substring(0, 4);
    console.log('scanned data' + check);
    this.setState({
      result: e,
      scan: false,
      ScanResult: true,
    });
    if (check === 'http') {
      Linking.openURL(e.data).catch(err =>
        console.error('An error occured', err),
      );
    } else {
      this.setState({
        result: e,
        scan: false,
        ScanResult: true,
      });
    }
  };

  activeQR = () => {
    this.setState({
      scan: true,
    });
  };
  scanAgain = () => {
    this.setState({
      scan: true,
      ScanResult: false,
    });
  };

  handleTextChange = e => {
    this.setState({
      inputText: e,
    });
  };

  makePayment = async () => {
    const {result} = this.state;
    let UpiUrl = result.data + `&amount=5`;
    let response = await UPI.openLink(UpiUrl);
    console.log(response);
  };

  render() {
    const {scan, ScanResult, result, inputText, paymentStatus} = this.state;
    return (
      <View style={styles.scrollViewStyle}>
        <TopBar>
          <View style={styles.topBarContent}>
            <Text style={styles.textTitle}>Pay or Send</Text>
          </View>
        </TopBar>
        <Fragment>
          <StatusBar barStyle="dark-content" />
          <Text style={styles.textTitle1}>
            Point your phone to any Freecharge, UPI or Bharat QR Code
          </Text>

          {ScanResult && (
            <Fragment>
              <View style={ScanResult ? styles.scanCardView : styles.cardView}>
                <Text>Type : {result.type}</Text>
                <Text>Result : {result.data}</Text>
                <Text numberOfLines={1}>RawData: {result.rawData}</Text>
                <TextInput
                  placeholder="Enter Amount to Pay"
                  style={styles.input}
                  value={inputText}
                  type="number"
                />

                <TouchableOpacity
                  onPress={this.makePayment}
                  style={styles.buttonTouchable}>
                  <Text style={styles.buttonTextStyle}>Pay</Text>
                </TouchableOpacity>
                {paymentStatus !== '' && <Text>{paymentStatus}</Text>}
                <TouchableOpacity
                  onPress={this.scanAgain}
                  style={styles.buttonTouchable}>
                  <Text style={styles.buttonTextStyle}>Scan Again</Text>
                </TouchableOpacity>
              </View>
            </Fragment>
          )}

          {scan && (
            <QRCodeScanner
              reactivate={true}
              showMarker={false}
              ref={node => {
                this.scanner = node;
              }}
              onRead={this.onSuccess}
            />
          )}
        </Fragment>
      </View>
    );
  }
}

export default PayMerchants;
