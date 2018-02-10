import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import HRTopBar from '../UI/HRTopBars/HRTopBar';
import HRBtn from '../UI/HRButtons/HRBtn';

export default class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1 }}>
            <HRTopBar title={'Home'} />
            <ScrollView 
                style={{ 
                    flex: 1, 
                    backgroundColor: 'white',
                    marginTop: 100, 
                    paddingTop: 20 
                    }}
            >
                <View>
                    <Text style={styles.title}>
                        My Workouts
                    </Text>
                    <View style={styles.listItem}>
                        <Text style={styles.listItemName}>
                            MyWorkout1
                        </Text>
                        <HRBtn 
                                xs 
                                textColor={'white'} 
                                bgColor={'#3F4448'} 
                                width={'35%'} 
                                roundness={50} 
                                height={40}
                        >
                                Do Workout
                            </HRBtn>
                    </View>
                    <View style={styles.listItem}>
                        <Text style={styles.listItemName}>
                            MyWorkout2
                        </Text>
                        <HRBtn 
                                xs 
                                textColor={'white'} 
                                bgColor={'#3F4448'} 
                                width={'35%'} 
                                roundness={50} 
                                height={40}
                        >
                                Do Workout
                            </HRBtn>
                    </View>
                    <View style={styles.listItem}>
                        <Text style={styles.listItemName}>
                            MyWorkout3
                        </Text>
                        <HRBtn 
                                xs 
                                textColor={'white'} 
                                bgColor={'#3F4448'} 
                                width={'35%'} 
                                roundness={50} 
                                height={40}
                        >
                                Do Workout
                            </HRBtn>
                    </View>
                </View>
            </ScrollView> 
        </View>   
      );
    }
  }

const styles = StyleSheet.create({
    title: {
        color: 'grey',
        fontSize: 22,
        alignSelf: 'center'
    },
    listItem: {
        flexDirection: 'row',
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#EAEBEA'
    },
    listItemName: {
        width: '65%',
        marginTop: 18,
        fontSize: 17
    }
});

