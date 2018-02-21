import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import HRCard from '../UI/HRCards/HRCard';
import HRContainerGradient from '../UI/HRContainers/HRContainerGradient';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <HRContainerGradient
        colors={['#00BFD5', '#1CDCB3']}
        start={[1, 0]}
        end={[0, 1]}
        //Added padding to the top to leave space for header
        //since the header is in position absolute
        style={{ flex: 1 }}
      >
          <ScrollView
          style={{
            backgroundColor: 'white',
            paddingTop: 10,
            flex: 1 
          }}
          >
              <HRCard 
              text='100 PUSH-UP CHALLENGE' 
              colors={['#FC5F69', '#FF9166']} 
              start={[0, 1]} 
              end={[1, 0]} 
              iconName='timer'
              onPress={() => { this.props.navigation.navigate('DoWorkout'); }}
              />
              <HRCard 
              text='AB WORKOUT' 
              colors={['#652297', '#9448B1']} 
              start={[0, 1]} 
              end={[1, 0]} 
              iconName='table' 
              onPress={() => { this.props.navigation.navigate('DoWorkout'); }}
              />
              <HRCard 
              text='CHEST WORKOUT' 
              colors={['#00BDBB', '#0AE9AF']} 
              start={[0, 1]} 
              end={[1, 0]} 
              onPress={() => { this.props.navigation.navigate('DoWorkout'); }}
              />
              <HRCard 
              text='ARM WORKOUT' 
              colors={['#B01758', '#EC6393']} 
              start={[0, 1]} 
              end={[1, 0]} 
              onPress={() => { this.props.navigation.navigate('DoWorkout'); }}
              />
          </ScrollView>
      </HRContainerGradient>
    );
  }
}

