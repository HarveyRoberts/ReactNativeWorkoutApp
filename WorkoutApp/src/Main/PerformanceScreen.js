import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import HRContainerGradient from '../UI/HRContainers/HRContainerGradient';

export default class PerformanceScreen extends React.Component {
  render() {
    return (
      <HRContainerGradient
        colors={['#00BFD5', '#1CDCB3']}
        start={[1, 0]}
        end={[0, 1]}
        //Added padding to the top to leave space for header
        //since the header is in position absolute
        style={{ flex: 1, paddingTop: 80 }}
      >
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: 'white',
            paddingTop: 20
          }}
        >
          <View>
            <Text>HI</Text>
          </View>
        </ScrollView>
      </HRContainerGradient>
    );
  }
}
