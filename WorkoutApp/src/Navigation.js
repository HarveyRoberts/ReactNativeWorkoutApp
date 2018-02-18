import { TabNavigator, StackNavigator } from 'react-navigation';
import React from 'react';
import HomeScreen from './Main/HomeScreen';
import WorkoutsScreen from './Main/WorkoutsScreen';
import PerformanceScreen from './Main/PerformanceScreen';
import ProfileScreen from './Main/ProfileScreen';
import DoWorkoutScreen from './Main/DoWorkoutScreen';
import HRTabBar from './UI/HRTabBars/HRTabBar';
import HRTopBarWithTabs from './UI/HRTopBars/HRTopBarWithTabs';
import HRTopBarBasic from './UI/HRTopBars/HRTopBarBasic';

const Navigator = TabNavigator({
    ///////////////
    //HOME PAGE
    ///////////////
    Home: {
        screen: TabNavigator({
            Workout1: {
                screen: HomeScreen,
            },
            Workout2: {
                screen: HomeScreen,
            },
            Workout3: {
                screen: HomeScreen,
            },
            Workout4: {
                screen: HomeScreen,
            },
        },
        // Configuration of the home tab bar
        {
            tabBarComponent: HRTopBarWithTabs,
            tabBarPosition: 'top',
            animationEnabled: true,
            swipeEnabled: true
        }
        ),
    },


    ///////////////
    //WORKOUTS PAGE
    ///////////////
    Workouts: {
        screen: StackNavigator({
            Workouts: {
                screen: WorkoutsScreen
            }
        },
        // Configuration of the workouts stack bar
        {
            navigationOptions: {
                title: 'Workouts',
            header: (<HRTopBarBasic 
                navigation={this.navigation} 
                title='Workouts' 
                bgColor='transparent'
            />)
            }
        }
        ),
    },


    ///////////////
    //DO WORKOUT PAGE
    ///////////////
    DoWorkout: {
        screen: DoWorkoutScreen,
    },

    ///////////////
    //PERFORMANCE PAGE
    ///////////////
    Perf: {
        screen: StackNavigator({
            Performance: {
                screen: PerformanceScreen
            }
        },
        // Configuration of the workouts stack bar
        {
            navigationOptions: {
                headerStyle: {
                    backgroundColor: '#00BBDA',
                    elevation: 0,
                    height: 75
                },
                title: 'Peformance',
                headerTitleStyle: {
                    color: 'white',
                    alignSelf: 'center',
                    fontSize: 23,
                    fontWeight: '100'
                }
            }
        }
        ),
    },


    ///////////////
    //PROFILE PAGE
    ///////////////
    Profile: {
        screen: StackNavigator({
            Profile: {
                screen: ProfileScreen
            }
        },
        // Configuration of the workouts stack bar
        {
            navigationOptions: {
                headerStyle: {
                    backgroundColor: '#00BBDA',
                    elevation: 0,
                    height: 75
                },
                title: 'Profile',
                headerTitleStyle: {
                    color: 'white',
                    alignSelf: 'center',
                    fontSize: 23,
                    fontWeight: '100'
                }
            }
        }
        ),
    },


},
// Configuration of the main tab bar
{
    tabBarComponent: HRTabBar,
    tabBarPosition: 'bottom',
    swipeEnabled: false, 
    animationEnabled: false,
    tabBarOptions: {
        labelStyle: {
            fontSize: 12
        },
        activeTintColor: '#26d3b3'
    }
}
);

//Navigator returns a component
export default Navigator;

