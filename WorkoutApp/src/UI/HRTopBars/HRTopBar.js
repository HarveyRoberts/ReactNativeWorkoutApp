import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HRTopBar = props => (
    <View style={styles.header}>
        <Text style={styles.leftIcon}>{props.icon}</Text>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.rightIcon}>{props.icon}</Text>
    </View>
);


const styles = StyleSheet.create({
    header: {
      width: '100%',
      padding: 60,
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'transparent',
      position: 'absolute',
      zIndex: 99
    },
    title: {
        color: 'white',
        fontSize: 18,

    },
    leftIcon: {
        color: 'white',
    },
    rightIcon: {
        color: 'white',
    }
});


export default HRTopBar;
