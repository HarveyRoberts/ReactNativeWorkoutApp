import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo';

const HRCard = props => (
    /**PROPS:
     * style: style of the container
     * colors: colors of the gradient container
     * start: position of the first color of the grdient container
     * end: position of the last color of the grdient container
     * iconStyle: style of the icon
     * iconName: name of the icon
     * iconSize: size of the icon
     * iconColor: color of the icon
     * text: text content of the text
     */
    <LinearGradient 
            style={[styles.container, props.style]}
            colors={props.colors}
            start={props.start}
            end={props.end}
    >
               {props.children} 

            <View style={styles.circle}>
                <Icon 
                style={[styles.icon, props.iconStyle]} 
                name={props.iconName || 'dumbbell'}
                size={props.iconSize || 68}
                color={props.iconColor || 'white'}
                />
            </View>
            <Text style={styles.text}>{props.text}</Text>
        </LinearGradient>
);

const styles = StyleSheet.create({
    container: {
        marginTop: '2.5%',
        marginBottom: '2.5%',
        width: '60%',
        padding: '5%',
        paddingTop: '15%',
        paddingBottom: '7%',
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        elevation: 9,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius: 4,
        borderRadius: 10
    },
    text: {
        fontSize: 25,
        width: '70%',
        textAlign: 'center',
        alignSelf: 'center',
        color: 'white',
        margin: '10%',
        marginTop: '25%'
        //fontFamily: 'sans-serif'
    },
    circle: {
        borderWidth: 3,
        borderColor: 'white',
        borderRadius: 50,
        alignSelf: 'center',
        justifyContent: 'center',
        width: 95,
        height: 95,
    },
    icon: {
        alignSelf: 'center'
    }
});

export default HRCard;
