import React, {Component} from 'react';
import {
  View,
  Text,
  Animated,
  PanResponder,
  Easing,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

import Article from './article';
export default class Offers extends Component {
  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY();
    this.swipedCardPosition = new Animated.ValueXY({
      x: 0,
      y: Dimensions.get('window').height,
    });
    this.state = {
      screenWidth: Dimensions.get('window').width,
      screenHeight: Dimensions.get('window').height,
      currentIndex: 0,
    };

    this._PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dy > 0 && this.state.currentIndex > 0) {
          this.swipedCardPosition.setValue({
            y: -this.state.screenHeight + gestureState.dy,
            x: 0,
          });
        } else {
          this.position.setValue({y: gestureState.dy, x: 0});
        }
      },
      onPanResponderRelease: (evt, gesture) => {
        if (-gesture.dy > 50 && -gesture.vy > 0.7) {
          Animated.timing(this.position, {
            toValue: {x: 0, y: -this.state.screenHeight},
            duration: 400,
          }).start(() => {
            this.setState({
              currentIndex: this.state.currentIndex + 1,
            });
            this.position.setValue({
              x: 0,
              y: 0,
            });
          });
        } else if (gesture.dy > 50 && gesture.vy > 0.7) {
          let currentIndex = this.state.currentIndex;
          if (currentIndex > 0) {
            Animated.timing(this.swipedCardPosition, {
              toValue: {x: 0, y: 0},
              duration: 400,
            }).start(() => {
              this.setState({
                currentIndex: this.state.currentIndex - 1,
              });
              this.swipedCardPosition.setValue({
                x: 0,
                y: -this.state.screenHeight,
              });
            });
          }
        } else {
          Animated.parallel([
            Animated.spring(this.position, {
              toValue: {x: 0, y: 0},
            }),
            Animated.spring(this.swipedCardPosition, {
              toValue: {x: 0, y: -this.state.screenHeight},
            }),
          ]).start();
        }
      },
    });
  }

  render() {
    const {screenWidth, screenHeight, currentIndex} = this.state;
    console.log(this.position);
    const articles = [
      {
        id: 1,
        title: 'Freecharge launches virtual cards for e-payment',
      },
      {
        id: 1,
        title: 'Freecharge launches virtual cards for e-payment',
      },
      {
        id: 1,
        title: 'Freecharge launches virtual cards for e-payment',
      },
    ];
    return (
      <View style={{flex: 1}}>
        {articles
          .map((article, i) => {
            if (i === currentIndex - 1) {
              return (
                <Animated.View
                  style={this.swipedCardPosition.getLayout()}
                  key={i}>
                  <Article article={article} />
                </Animated.View>
              );
            }

            if (i < currentIndex) return null;

            if (currentIndex !== i) {
              return (
                <Animated.View key={i}>
                  <Article article={article} />
                </Animated.View>
              );
            }
            return (
              <Animated.View
                style={this.position.getLayout()}
                {...this._PanResponder.panHandlers}
                key={i}>
                <Article article={article} />
              </Animated.View>
            );
          })
          .reverse()}
      </View>
    );
  }
}
