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
          <View
          style={{
            backgroundColor: 'white',
            paddingTop: 50,
            flex: 1 
          }}
          >
            <View style={styles.title}>
              <Text style={styles.titleText}>Choose your workout</Text>
            </View>
            <ScrollView style={{flex: 1}}>
              <HRCard text='100 PUSH-UP CHALLENGE' colors={['#FC5F69', '#FF9166']} start={[0, 1]} end={[1, 0]} iconName='timer' />
              <HRCard text='AB WORKOUT' colors={['#652297', '#9448B1']} start={[0, 1]} end={[1, 0]} iconName='table' />
              <HRCard text='CHEST WORKOUT' colors={['#00BDBB', '#0AE9AF']} start={[0, 1]} end={[1, 0]} />
              <HRCard text='ARM WORKOUT' colors={['#B01758', '#EC6393']} start={[0, 1]} end={[1, 0]} />
            </ScrollView>
          </View>
      </HRContainerGradient>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#F3F3F3',
    paddingBottom: 30
  },
  titleText: {
    color: 'grey',
    fontSize: 22,
    alignSelf: 'center'
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    marginBottom: 4,
    paddingLeft: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#F3F3F3'
  },
  listItemName: {
    marginTop: 18,
    fontSize: 18
  },
  listItemPressToWorkoutText: {
    fontSize: 15,
    letterSpacing: 0,
    textAlign: 'center',
    color: '#efefef'
  }
});
