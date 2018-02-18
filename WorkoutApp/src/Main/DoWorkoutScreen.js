import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LinearGradient } from 'expo';

export default class DoWorkoutScreen extends React.Component {

    static navigationOptions = {
        tabBarVisible: false
    }

    render() {
        return (
            <LinearGradient style={styles.container} colors={['#1c3e51', '#1F3445']} > 
                <View style={styles.topSection}>
                    {/*Invisible icon to make placement with flex easier*/}
                    <Icon name="window-close" size={30} style={{ opacity: 0 }} />
                    <Text style={styles.title}>My Workout 1</Text>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Home'); }}>
                        <Icon name="window-close" size={30} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.percentageContainer}>
                    <View style={styles.percentageProgressCircle}>
                        <Text style={styles.percentage}>100%</Text>
                    </View>
                </View>
                <Text style={styles.exerciceTitle}>Crunches x25</Text>
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
    percentageProgressCircle: {
        borderWidth: 6,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#0CF9B4',
        borderRadius: 500,
        height: 170,
        width: 170,
        elevation: 3
    },
    percentage: {
        fontSize: 57,
        color: 'white',
    },
    exerciceTitle: {
        color: 'white',
        fontSize: 40
    }
});

