import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import HRBtn from '../UI/HRButtons/HRBtn';


export default class HomeScreen extends React.Component {
    loadWorkout() {
        this.props.navigation.navigate('');
    }

    render() {
      return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.centerTextContainer}>
                    <Text style={styles.centerTextSmall}>Current Performance</Text>
                    <Text style={styles.centerTextBig}>256</Text>
                    <HRBtn 
                        small 
                        textColor={'white'} 
                        bgColor={'#3F6570'} 
                        width={'48%'} 
                        roundness={50} 
                        alignSelf={'center'} 
                        height={45}
                        style={styles.doWorkoutBtn}
                    >
                        Do Workout
                    </HRBtn>
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
    centerTextContainer: {
        marginTop: 30
    },
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
        backgroundColor: 'white',
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

