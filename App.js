import React from 'react';
import {View, Text} from 'react-native';
import Route from './src/navigation/navigation';
import Wrapper from './src/screens/Wrapper';

const App = () => {
  return (
    <Wrapper>
      <Route />
    </Wrapper>
  );
};

export default App;
