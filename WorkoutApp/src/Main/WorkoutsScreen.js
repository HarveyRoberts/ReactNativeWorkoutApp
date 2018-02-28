import React from 'react';
import { connect } from 'react-redux';
import { Dimensions, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import HRCardHorizontal from '../UI/HRCards/HRCardHorizontal';
import HRContainerGradient from '../UI/HRContainers/HRContainerGradient';
import HRCarousel2 from '../UI/HRCarousels/HRCarousel2';
import HRBtnGradient from '../UI/HRButtons/HRBtnGradient';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class WorkoutsScreen extends React.Component {

  loadWorkout(workout) {
    console.log('hi there: ', workout.id);
    this.props.navigation.navigate('DoWorkout');
  }

  //Function that returns what we want to render as a card
  //passing in the self variable that refers to this component
  renderCard(item, self) {
    return (
      <View style={{ width: '100%' }}>
        <HRCardHorizontal
        text={item.title} 
        colors={item.colors} 
        bgImage={item.bgImage}
        start={[0, 1]} 
        end={[1, 0]} 
        iconName={item.iconName}
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
          //getting self (ie this) thanks to the props because the this variable 
          //would be the carousel component otherwise
          onPress={() => { self.props.navigation.navigate('DoWorkout', { workout: item.id }); }}
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

        <View style={{ flex: 1, backgroundColor: '#f4f4f4', paddingTop: SCREEN_HEIGHT * 0.1 }}>
          {/*Left and right arrows*/}
          <View style={styles.arrowsContainer}>
            <Icon 
            color='grey' 
            size={SCREEN_WIDTH * 0.13} 
            name='chevron-left' 
            style={{ alignSelf: 'center' }} 
            />
            <Icon 
            color='grey' 
            size={SCREEN_WIDTH * 0.13} 
            name='chevron-right' 
            style={{ alignSelf: 'center' }} 
            />
          </View>
          {/*defining self as this so that we can access this.props.navigation 
          inside the renderCard function (the this varaible would be the carousel 
          component otherwise*/}
          <HRCarousel2 data={this.props.workouts} self={this} renderCard={this.renderCard} />
        </View>
      </HRContainerGradient>
    );
  }
}


const mapStateToProps = state => ({
  workouts: state.WorkoutsReducer.workouts
});

export default connect(mapStateToProps, { })(WorkoutsScreen);


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

