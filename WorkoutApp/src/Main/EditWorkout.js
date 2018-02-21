import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import HRListItem from '../UI/HRLists/HRListItems/HRListItem';
import HRContainerGradient from '../UI/HRContainers/HRContainerGradient';
import HRTopBarBasic from '../UI/HRTopBars/HRTopBarBasic';

export default class EditWorkout extends React.Component {

    static navigationOptions = {
        header: <HRTopBarBasic 
        title='Edit Workout' 
        bgColor='transparent'
        onPressLeftIcon={() => { this.props.navigation.navigate('Workouts'); }}
        leftIconName='arrow-left'
        leftIconColor='white'
        leftIconSize={35}
        leftIconStyle={{ paddingTop: 3 }}
        />
    };

    render() {
        return (
            <HRContainerGradient
            colors={['#00BFD5', '#1CDCB3']}
            start={[1, 0]}
            end={[0, 1]}
            //Added padding to the top to leave space for header
            //since the header is in position absolute
            style={{ flex: 1, paddingTop: 83 }}
            >
            <ScrollView
            style={{
                backgroundColor: 'white',
                paddingTop: 20
            }}
            >
            <View>
                <View style={styles.title}>
                <Text style={styles.titleText}>Edit Your Workout</Text>
                </View>
                <HRListItem title={'Name:'} secondTitle="Ab Workout" />
                <HRListItem
                title={'Exercices:'}
                secondTitle={'4'}
                secondTitleWidth={'50%'}
                />
                <HRListItem title={'Recovery Time:'} secondTitle="20sec" />
            </View>
            </ScrollView>
            </HRContainerGradient>
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
      alignSelf: 'center'
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

