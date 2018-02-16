import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HRListItem from '../UI/HRLists/HRListItems/HRListItem';

export default class ProfileScreen extends React.Component {
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
                    <HRListItem 
                        rightBtnText={'Edit'} 
                        hint={'Press To Workout'} 
                        title={'Ab workout'}  
                        rightBtn
                    />
                    <HRListItem 
                        rightBtnText={'Edit'} 
                        hint={'Press To Workout'} 
                        title={'Easy Full Body workout'} 
                        rightBtn
                    />
                    <HRListItem 
                        rightBtnText={'Edit'} 
                        hint={'Press To Workout'} 
                        title={'Chest Workout'}  
                        rightBtn
                    />
                    <HRListItem 
                        rightBtnText={'Edit'} 
                        hint={'Press To Workout'} 
                        title={'Arm workout'} 
                        rightBtn
                    />
                                    
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

