import React from 'react';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import HRCardHorizontal from '../UI/HRCards/HRCardHorizontal';
import HRContainerGradient from '../UI/HRContainers/HRContainerGradient';
import HRCarousel2 from '../UI/HRCarousels/HRCarousel2';
import HRBtnGradient from '../UI/HRButtons/HRBtnGradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const DATA = [
  { id: 0, title: '100 Push-up challenge', bestScore: 256, description: 'You have to do 100 pushups as fast as possible', bgImage: { uri: 'https://c.pxhere.com/photos/bc/e5/fitness_weight_man_guy_male-155257.jpg!d' }, colors: ['#FC5F69', '#FF9166'], iconName: 'timer' },
  { id: 1, title: 'Bring it up', bestScore: 512, description: 'Can you last the hole track?', bgImage: { uri: 'https://c.pxhere.com/photos/bc/1b/african_ethnicity_beats_black_guy_headphones_hearing_listen_man-963087.jpg!d' }, colors: ['#473CC7', '#347bed'], iconName: 'dumbbell' },
  { id: 2, title: 'Abs crusher', bestScore: 436, description: 'How far can you go?', bgImage: { uri: 'https://c.pxhere.com/photos/bc/e5/fitness_weight_man_guy_male-155257.jpg!d' }, colors: ['#00b79f', '#00e0c2'], iconName: 'table' },
  { id: 3, title: 'Arm challenge', bestScore: 89, description: 'This workout is garantied a big challenge', bgImage: { uri: 'https://media.defense.gov/2012/Nov/29/2000093493/780/780/0/120425-F-WM587-159w.JPG' }, colors: ['#734DEE', '#5325ea'], iconName: 'timer' }
];

export default class ProfileScreen extends React.Component {
  //Function that returns what we want to render as a card
  renderCard(item) {
    return (
      <View style={{ width: '100%' }}>
        <HRCardHorizontal
        text={item.title} 
        colors={item.colors} 
        bgImage={item.bgImage}
        start={[0, 1]} 
        end={[1, 0]} 
        iconName={item.iconName}
        onPress={() => { this.props.navigation.navigate('DoWorkout'); }}
        />
        <View style={styles.bottomSection} >
          <View style={styles.textContainer}>
            <Text style={styles.title} >BEST: {item.bestScore}</Text>
            <Text style={styles.description} >{item.description}</Text>
          </View>
          <HRBtnGradient 
          large
          colors={item.colors}
          start={[0, 1]} 
          end={[1, 0]} 
          roundness={50} 
          textColor='white' 
          width={SCREEN_WIDTH * 0.53}
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
        <View style={styles.arrowsContainer}>
            <Icon color='grey' size={SCREEN_WIDTH * 0.13} name='chevron-left' style={{ alignSelf: 'center' }} />
            <Icon color='grey' size={SCREEN_WIDTH * 0.13} name='chevron-right' style={{ alignSelf: 'center' }} />
          </View>
          <HRCarousel2 data={DATA} renderCard={this.renderCard} />
        </View>
      </HRContainerGradient>
    );
  }
}

const styles = StyleSheet.create({
    arrowsContainer: { 
      justifyContent: 'space-between', 
      padding: '1%', 
      opacity: 0.15, 
      alignItems: 'center', 
      height: '100%', 
      width: '100%', 
      flexDirection: 'row', 
      position: 'absolute' 
    },
    bottomSection: {
      alignItems: 'center'
    },
    textContainer: {
      height: SCREEN_HEIGHT * 0.13,
      width: '65%',
      marginTop: SCREEN_HEIGHT * 0.01,
      justifyContent: 'center'
    },
    title: {
      fontSize: SCREEN_WIDTH * 0.065,
      textAlign: 'center',
      opacity: 0.7,
    },    
    description: {
      fontSize: SCREEN_WIDTH * 0.037,
      textAlign: 'center',
      opacity: 0.4,
    }

});

