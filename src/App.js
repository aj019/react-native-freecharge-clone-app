import React from 'react';
import {} from 'react-native';
import {Home} from './containers';
import TabView from 'react-native-scrollable-tab-view';

export default function App() {
  return (
    <>
      <TabView>
        <Home tabLabel="Home" />
      </TabView>
    </>
  );
}
