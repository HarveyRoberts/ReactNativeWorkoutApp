import React from 'react';
import { StyleSheet, Text, View, ScrollView, Animated } from 'react-native';

import HRBtn from '../UI/HRButtons/HRBtn';
import HRGuideline from '../UI/HRSvgs/HRGuideline';

export default class HomeScreen extends React.Component {

    state= { opacity: new Animated.Value(0), currentRoute: this.props.navigation.state.routeName }

    componentDidMount() {
        //the action that executes the animation
        Animated.timing(
            //what we want to change
            this.state.opacity,
            //how we want to change it
            {
                toValue: 1,
                duration: 2000
            }
        ).start();
        console.log(this.state.currentRoute);
    }


    render() {
      return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ marginTop: 30 }}>                
                    <Animated.View 
                    //Link the opacity that will be animated to the style of the view
                    style={{ opacity: this.state.opacity }}
                    >
                        <Text style={styles.centerTextSmall}>Current Performance</Text>
                        <Text style={styles.centerTextBig}>256</Text>
                        <View>
                            <HRBtn 
                                small 
                                textColor={'white'} 
                                bgColor={'#3F6570'} 
                                width={'45%'} 
                                roundness={50} 
                                alignSelf={'center'} 
                                height={42}
                                style={styles.doWorkoutBtn}
                                onPress={() => this.props.navigation.navigate('DoWorkout', { Workout: 'workout' })}
                            >
                                Do Workout
                            </HRBtn>
                        </View>
                    </Animated.View>
                </View>
                <View style={styles.bottomContainer}>
                    <Text style={styles.bottomContainerTitle}>Recent Workouts</Text>
                </View>
            </ScrollView>
        </View>    
      );
    }
}

const styles = StyleSheet.create({
    centerTextBig: {
        color: 'white',
        fontSize: 95,
        alignSelf: 'center'
    },
    centerTextSmall: {
        color: 'white',
        fontSize: 15,
        alignSelf: 'center'
    },
    doWorkoutBtn: {
        elevation: 3,
        shadowOffset: { height: 4 },
        shadowColor: 'black',
        shadowOpacity: 0.4,
    },
    bottomContainer: {
        marginTop: 30,
        backgroundColor: '#EEECF1',
        height: 800,
        width: '300%',
        borderTopLeftRadius: 800,
        borderTopRightRadius: 800,
        alignSelf: 'center'
    },
    bottomContainerTitle: {
        marginTop: 20,
        color: 'grey',
        fontSize: 16,
        alignSelf: 'center'
    }
});

