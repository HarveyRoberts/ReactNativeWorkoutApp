import { TabNavigator, StackNavigator, TabBarBottom, TabBarTop } from 'react-navigation';
import HomeScreen from './Main/HomeScreen';
import WorkoutsScreen from './Main/WorkoutsScreen';
import PerformanceScreen from './Main/PerformanceScreen';
import ProfileScreen from './Main/ProfileScreen';


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
        tabBarComponent: TabBarTop,
        tabBarPosition: 'top',
        animationEnabled: true,
        swipeEnabled: true,
        tabBarOptions: {
            style: {
                backgroundColor: '#00BBDA',
                elevation: 0,
                //So it doesn't mix with the devices top status bar
                paddingTop: 27,
                //For IOS
                shadowOpacity: 0
            },
            labelStyle: {
                fontSize: 12,
                color: 'white'
            },
        }
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
            headerStyle: {
                backgroundColor: '#00BBDA',
                elevation: 0,
                height: 75
            },
            title: 'Workouts',
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
    //Performance PAGE
    ///////////////
  Performance: {
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
            title: 'Performance',
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
    //Profile PAGE
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
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
        style: {
            height: 55,
            paddingTop: 5,
            paddingBottom: 2
        },
        labelStyle: {
            fontSize: 12
        },
        activeTintColor: '#26d3b3'
    }
}
);

//Navigator returns a component
export default Navigator;

