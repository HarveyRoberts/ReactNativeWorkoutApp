import React from 'react';
import { StyleSheet } from 'react-native';
import Navigator from './src/Navigation';
import HRContainerGradient from './src/UI/HRContainers/HRContainerGradient';

export default class App extends React.Component {
  render() {
    return (
      <HRContainerGradient 
      colors={['#009ee8', '#16ff9e']} 
      start={[1, 0]}
      end={[0, 1]}
      style={styles.container}
      >
        {/*Since Navigator returns a component, the component will*/}
        {/*correspond to the current selected component in the navigator*/}
        <Navigator />
      
      </HRContainerGradient>
    );
  }
}

const styles = StyleSheet.create({
   container: {
      //paddingTop: 30
  }
});
