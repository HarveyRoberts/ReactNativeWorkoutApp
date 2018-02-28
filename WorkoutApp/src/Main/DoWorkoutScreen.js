import React from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo';

import { highscoreChanged, incrementedWorkoutCount } from '../Actions/index';
import HRCircularProgressBar from '../UI/HRProgressBars/HRCircularProgressBar';
import HRBtnGradient from '../UI/HRButtons/HRBtnGradient';

class DoWorkoutScreen extends React.Component {
    state={ 
        finishedWorkout: false, 
        workoutCompletion: 0, 
        currentExercice: 0, 
        currentExerciceAmount: 15 
    };

    doneExercise() {
        if (this.props.navigation.state.params) {
            // If we haven't finished the workout
            if (
                this.state.currentExercice 
                < 
                this.props.workouts[this.props.navigation.state.params.workout].exercises.length - 1
            ) {
                // We increment the currentExercise and increase the workoutCompletion
                // which is the new currentExercise (currentExercise + 1) divided by the total
                // amount of exercises 
                this.setState({
                    currentExercice: this.state.currentExercice + 1,
                    workoutCompletion: ((this.state.currentExercice + 1) / (this.props.workouts[this.props.navigation.state.params.workout].exercises.length )) * 100
                }); 
            } else {
                this.setState({
                    finishedWorkout: true, 
                });
            }
        }
    }

    finishedWorkout() {
        if (this.state.finishedWorkout) {
            return (
                <Text style={styles.exerciceTitle}>FINISHED</Text>
            );
        }
    return (<Text style={styles.exerciceTitle}>NOPE</Text>);
    }

    render() {
        return (
            <LinearGradient style={styles.container} colors={['#1c3e51', '#1F3445']} > 
                <View style={styles.topSection}>
                    {/*Invisible icon to make placement with flex easier*/}
                    <Icon name="window-close" size={30} style={{ opacity: 0 }} />
                    <Text 
                    style={styles.title}
                    >
                    {/*Need to do this test oterwise on startup we will get an 
                    error since there are no params on startup
                    (I would like to know how to fix this*/}
                    {
                        this.props.navigation.state.params ? 
                        this.props.workouts[this.props.navigation.state.params.workout].title : 
                        null
                    }
                    </Text>
                    <TouchableOpacity onPress={() => { this.props.navigation.goBack(); }}>
                        <Icon name="window-close" size={30} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.percentageContainer}>
                <HRCircularProgressBar percentage={this.state.workoutCompletion} fill='#1C3A4C' >
                        <Text style={styles.percentage}>{this.state.workoutCompletion}%</Text>
                </HRCircularProgressBar>
                </View>
                <Text style={styles.exerciceTitle}>
                {
                    this.props.navigation.state.params ? 
                    this.props.workouts[this.props.navigation.state.params.workout].exercises[this.state.currentExercice].name : 
                    null
                } 
                </Text>
                <Text 
                style={styles.exerciceTitle}
                >
                x &nbsp;
                {
                    this.props.navigation.state.params ? 
                    this.props.workouts[this.props.navigation.state.params.workout].exercises[this.state.currentExercice].amount : 
                    null
                }
                </Text>
                <HRBtnGradient large colors={['#09F4B8', '#03c474']} onPress={(this.doneExercise.bind(this))} >
                    NEXT
                </HRBtnGradient>
                {this.finishedWorkout()}
            </LinearGradient> 
        );
    }
}


const mapStateToProps = state => ({
    workouts: state.WorkoutsReducer.workouts
  });
  
export default connect(
    mapStateToProps, 
    { 
        highscoreChanged, 
        incrementedWorkoutCount 
    }
)(DoWorkoutScreen);
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        paddingTop: 30
    },
    topSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    closeBtn: {
        color: 'white'
    },
    title: {
        color: 'white',
        marginTop: 30,
        fontSize: 25
    },
    percentageContainer: {
        marginTop: 30,
        marginBottom: 10,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#3F6E7C',
        borderRadius: 500,
        height: 200,
        width: 200
    },
    percentage: {
        fontSize: 55,
        color: 'white',
    },
    exerciceTitle: {
        color: 'white',
        fontSize: 40
    }
});

