import React from 'react';
import { Image, ScrollView, Text, View, StyleSheet } from 'react-native';
import HRCardHorizontal from '../UI/HRCards/HRCardHorizontal';
import HRContainerGradient from '../UI/HRContainers/HRContainerGradient';
import HRBtnGradient from '../UI/HRButtons/HRBtnGradient';
import HRCarousel from '../UI/HRCarousels/HRCarousel';

const DATA = [
  { id: 1, type: 'PUSH-UPS', title: '100 Push-up challenge', description: 'You have to do 100 pushups as fast as possible', colors: ['#FC5F69', '#FF9166'], iconName: 'timer' },
  { id: 2, type: 'PUSH-UPS', title: 'Bring it up', description: 'Can you last the hole track?', colors: ['#473CC7', '#347bed'], iconName: 'dumbbell' },
  { id: 3, type: 'ABS', title: 'Abs crusher', description: 'How far can you go?', colors: ['#00b79f', '#00e0c2'], iconName: 'table' },
  { id: 4, type: 'PUSH-UPS', title: '200 Push-up challenge', description: 'You have to do 100 pushups as fast as possible', colors: ['#FC5F69', '#FF9166'], iconName: 'table' },
  { id: 5, type: 'PUSH-UPS', title: '300 Push-up challenge', description: 'You have to do 100 pushups as fast as possible', colors: ['#FC5F69', '#FF9166'], iconName: 'table' },
  { id: 6, type: 'PUSH-UPS', title: '400 Push-up challenge', description: 'You have to do 100 pushups as fast as possible', colors: ['#FC5F69', '#FF9166'], iconName: 'table' },
];

export default class ProfileScreen extends React.Component {
  //Function that returns what we want to render as a card
  renderCard(item) {
    return (
      <View style={{width: '100%'}}>
        <HRCardHorizontal
        text={item.type} 
        colors={item.colors} 
        start={[0, 1]} 
        end={[1, 0]} 
        iconName={item.iconName}
        onPress={() => { this.props.navigation.navigate('DoWorkout'); }}
        />
        <View style={styles.bottomSection} >
          <Text style={styles.title} >{item.title}</Text>
          <Text style={styles.description} >{item.description}</Text>
          <HRBtnGradient 
          large 
          colors={item.colors}
          start={[0, 1]} 
          end={[1, 0]} 
          roundness={50} 
          textColor='white' 
          width={220}
          >
          Workout
          </HRBtnGradient>
        </View>
      </View>
    );
  }

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
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <HRCarousel data={DATA} renderCard={this.renderCard} />
        </View>
      </HRContainerGradient>
    );
  }
}

const styles = StyleSheet.create({
    bottomSection: {
      alignItems: 'center'
    },
    title: {
      fontSize: 22,
      width: '40%',
      marginTop: '2%',
      textAlign: 'center',
      opacity: 0.7,
    },    
    description: {
      fontSize: 12,
      width: '60%',
      textAlign: 'center',
      opacity: 0.35,
    }

});

