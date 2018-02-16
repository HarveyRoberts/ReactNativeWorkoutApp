import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HRContainerGradient from '../UI/HRContainers/HRContainerGradient';
import HRListItem from '../UI/HRLists/HRListItems/HRListItem';

export default class ProfileScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1 }}>
            <HRContainerGradient
                colors={['#00BBDA', '#26EDA0']}
                start={[0, 0]}
                end={[0, 1]}
            >
                <View style={styles.outerProfileCircle}>
                    <View style={styles.profileCircle}>
                        <Image 
                            style={styles.profileImage} 
                            source={{ uri: 'https://cdn0.iconfinder.com/data/icons/users-android-l-lollipop-icon-pack/24/user-256.png' }} 
                        />
                    </View>
                </View>
                <Text style={styles.profileUsersName} >
                {'Harvey\nRoberts'}
                </Text>
            </HRContainerGradient>
            <ScrollView 
                style={{ 
                    flex: 1, 
                    backgroundColor: 'white',
                    paddingTop: 20 
                    }}
            >
            <HRListItem title={'Name:'} secondTitle='Harvey' />
            <HRListItem 
            title={'Email:'} 
            secondTitle={'email.email@email.com'} 
            secondTitleWidth={'50%'} 
            />
            <HRListItem title={'Birthday:'} secondTitle='28/04/1998' />
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
    },
    outerProfileCircle: {
        marginBottom: 10,
        marginTop: 20,
        borderRadius: 150,
        backgroundColor: 'white',
        width: 155,
        height: 155,
        alignSelf: 'center',
        alignItems: 'center',
        opacity: 0.6,
        justifyContent: 'center',
    },
    profileCircle: {
        borderRadius: 150,
        backgroundColor: 'white',
        width: 135,
        height: 135,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    profileImage: {
        height: 120,
        width: 120,
        alignSelf: 'center'
    },
    profileUsersName: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

