import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HRBtn from '../UI/HRButtons/HRBtn';

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        tabBarIcon: <Icon name="user" size={35} color="#a3a3a3" />
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

