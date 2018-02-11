import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HRBtn from '../UI/HRButtons/HRBtn';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        tabBarIcon: <Icon name="home" size={35} color="#32fcd7" />
    };


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
                        bgColor={'#3F4448'} 
                        width={'48%'} 
                        roundness={50} 
                        alignSelf={'center'} 
                        height={40}
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
        marginTop: 50
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
    bottomContainer: {
        marginTop: 30,
        backgroundColor: 'white',
        height: 800,
        borderRadius: 60
    },
    bottomContainerTitle: {
        marginTop: 20,
        color: 'grey',
        fontSize: 16,
        alignSelf: 'center'
    }
});

