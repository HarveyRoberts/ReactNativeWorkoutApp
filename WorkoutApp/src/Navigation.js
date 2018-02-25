import { TabNavigator, StackNavigator } from 'react-navigation';
import React from 'react';
import HomeScreen from './Main/HomeScreen';
import WorkoutsScreen from './Main/WorkoutsScreen';
import PerformanceScreen from './Main/PerformanceScreen';
import ProfileScreen from './Main/ProfileScreen';
import DoWorkoutScreen from './Main/DoWorkoutScreen';
import EditWorkout from './Main/EditWorkout';
import HRTabBar from './UI/HRTabBars/HRTabBar';
import HRTopBarWithTabsNonReusable from './UI/HRTopBars/HRTopBarWithTabsNonReusable';
import HRTopBarWithTabs from './UI/HRTopBars/HRTopBarWithTabs';
import HRTopBarBasic from './UI/HRTopBars/HRTopBarBasic';

const Navigator = TabNavigator({
    ////////////////////////////////////
    //MAIN SECTION//////////////////////
    ////////////////////////////////////
    Main: {
        screen: TabNavigator({
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
                    tabBarComponent: HRTopBarWithTabsNonReusable,
                    tabBarPosition: 'top',
                    animationEnabled: true,
                    swipeEnabled: true
                }
                ),
            },
    
            ///////////////
            //DO WORKOUT PAGE
            ///////////////
            Workout: {
                screen: StackNavigator({
                    Workouts: {
                        screen: WorkoutsScreen
                    }
                },
                {
                    navigationOptions: {
                        header: <HRTopBarBasic 
                            title='Choose Your Workout' 
                            borderBottomColor='transparent'
                            bgColor='transparent'
                            titleColor='#707070'
                        />
                    }
                })
            },
    
            ///////////////
            //PERFORMANCE PAGE
            ///////////////
            /*Perf: {
                screen: TabNavigator({
                    General: {
                        screen: PerformanceScreen
                    },
                    'Per Body Part': {
                        screen: PerformanceScreen
                    },
                    Achievements: {
                        screen: PerformanceScreen
                    }
                },
                // Configuration of the perfomance stack bar
                {
                    tabBarComponent: ({ navigation, navigationState }) => 
                        <HRTopBarWithTabs 
                            title='Performance' 
                            navigation={navigation} 
                            navigationState={navigationState} 
                        />,
                    tabBarPosition: 'top',
                    animationEnabled: true,
                    swipeEnabled: true
                }
                ),
            },*/
    
    
            ///////////////
            //PROFILE PAGE
            ///////////////
            Profile: {
                screen: StackNavigator({
                    Profile: {
                        screen: ProfileScreen
                    }
                },
                // Configuration of the profile stack bar
                {
                    navigationOptions: {
                        header: <HRTopBarBasic 
                            title='Profile' 
                            borderBottomColor='transparent'
                            bgColor='transparent'
                        />
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
        )
    },
    ////////////////////////////////////
    //DO WOKROUT SECTION////////////////
    ////////////////////////////////////
    DoWorkout: {
        screen: DoWorkoutScreen,
    },
},
{
    swipeEnabled: false, 
    animationEnabled: true,
    navigationOptions: {
        tabBarVisible: false
    }
}
);


//Navigator returns a component
export default Navigator;

