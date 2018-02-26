import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo';
import HRCircularProgressBar from '../UI/HRProgressBars/HRCircularProgressBar';
import HRBtnGradient from '../UI/HRButtons/HRBtnGradient';

export default class DoWorkoutScreen extends React.Component {
    state={ workoutCompletion: 20, currentExercice: 'Push-ups', currentExerciceAmount: 15 };

    render() {
        return (
            <LinearGradient style={styles.container} colors={['#1c3e51', '#1F3445']} > 
                <View style={styles.topSection}>
                    {/*Invisible icon to make placement with flex easier*/}
                    <Icon name="window-close" size={30} style={{ opacity: 0 }} />
                    <Text style={styles.title}>{this.props.navigation.state.params ? this.props.navigation.state.params.workout.title : 'noo'}</Text>
                    <TouchableOpacity onPress={() => { this.props.navigation.goBack(); }}>
                        <Icon name="window-close" size={30} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.percentageContainer}>
                <HRCircularProgressBar percentage={this.state.workoutCompletion} fill='#1C3A4C' >
                        <Text style={styles.percentage}>{this.state.workoutCompletion}%</Text>
                </HRCircularProgressBar>
                </View>
                <Text style={styles.exerciceTitle}>{this.state.currentExercice} x{this.state.currentExerciceAmount}</Text>
                <HRBtnGradient large colors={['#09F4B8', '#03c474']} onPress={() => { this.setState({ workoutCompletion: this.state.workoutCompletion < 100 ? this.state.workoutCompletion + 2 : this.state.workoutCompletion }); }} >
                    NEXT
                </HRBtnGradient>
            </LinearGradient> 
        );
    }
}

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
        fontSize: 40,
        marginBottom: '5%'
    }
});

