import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HRBtn from '../UI/HRButtons/HRBtn';

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        tabBarIcon: <Icon name="dumbbell" size={35} color="#a3a3a3" />
    };
    render() {
      return (
        <View style={{ flex: 1 }}>
            <ScrollView 
                style={{ 
                    flex: 1, 
                    backgroundColor: 'white', 
                    paddingTop: 20 
                    }}
            >
                <View>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>
                            Choose your workout
                        </Text>
                    </View>
                    <View style={styles.listItem}>
                        <View>
                            <Text style={styles.listItemName}>
                                MyWorkout1
                            </Text>
                        </View>
                        <Text style={styles.listItemPressToWorkoutText}>
                            {'PRESS\nTO\nWORKOUT'}
                        </Text>
                        <HRBtn 
                                xs 
                                textColor={'white'} 
                                bgColor={'#3F4448'} 
                                width={'25%'} 
                                roundness={50} 
                                height={40}
                        >
                                Edit
                        </HRBtn>
                    </View>
                    <View style={styles.listItem}>
                        <View>
                            <Text style={styles.listItemName}>
                                MyWorkout1
                            </Text>
                        </View>
                        <Text style={styles.listItemPressToWorkoutText}>
                            {'PRESS\nTO\nWORKOUT'}
                        </Text>
                        <HRBtn 
                                xs 
                                textColor={'white'} 
                                bgColor={'#3F4448'} 
                                width={'25%'} 
                                roundness={50} 
                                height={40}
                        >
                                Edit
                        </HRBtn>
                    </View>
                    <View style={styles.listItem}>
                        <View>
                            <Text style={styles.listItemName}>
                                MyWorkout1
                            </Text>
                        </View>
                        <Text style={styles.listItemPressToWorkoutText}>
                            {'PRESS\nTO\nWORKOUT'}
                        </Text>
                        <HRBtn 
                                xs 
                                textColor={'white'} 
                                bgColor={'#3F4448'} 
                                width={'25%'} 
                                roundness={50} 
                                height={40}
                        >
                                Edit
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
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#F3F3F3',
        paddingBottom: 30
    },
    titleText: {
        color: 'grey',
        fontSize: 22,
        alignSelf: 'center',
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

