import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { Svg } from 'expo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HRContainerGradient from '../UI/HRContainers/HRContainerGradient';
import HRHexagon from '../UI/HRSvgs/HRHexagon';

export default class PerformanceScreen extends React.Component {
  render() {
    return (
      <HRContainerGradient
        colors={['#00BFD5', '#1CDCB3']}
        start={[1, 0]}
        end={[0, 1]}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: 'white'
          }}
        >  
        <HRHexagon style={{ alignSelf: 'center' }} color='red' height='75' width='75' />
        <View style={styles.levelTextContainer} >
          <Text style={styles.levelText} >Level 1</Text>
        </View>
        </ScrollView>
      </HRContainerGradient>
    );
  }
}

const styles = StyleSheet.create({
  levelTextContainer: {
    width: 75,
    backgroundColor: 'red',
    padding: 3,
    marginTop: 5,
    alignSelf: 'center',
    borderRadius: 2
  },
  levelText: {
    color: 'white',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 15
  }


});
