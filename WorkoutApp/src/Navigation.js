import { TabNavigator, StackNavigator, TabBarTop } from 'react-navigation';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
import HomeScreen from './Main/HomeScreen';
import WorkoutsScreen from './Main/WorkoutsScreen';
import PerformanceScreen from './Main/PerformanceScreen';
import ProfileScreen from './Main/ProfileScreen';
import DoWorkoutScreen from './Main/DoWorkoutScreen';
import HRTabBar from './UI/HRTabBars/HRTabBar';


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
    //DO WORKOUT PAGE
    ///////////////
    DoWorkout: {
        screen: DoWorkoutScreen,
    },

    ///////////////
    //PERFORMANCE PAGE
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
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
        labelStyle: {
            fontSize: 12
        },
        activeTintColor: '#26d3b3'
    },
    navigationOptions: {
        transitionSpec: {
          duration: 900,
        },
        transitionConfig: () => ({
          screenInterpolator: props => {
            // Transitioning to search screen (navigate)
            if (props.scene.route.routeName === 'DoWorkout') {
              return CardStackStyleInterpolator.forFade(props);
            }
      
            return CardStackStyleInterpolator.forHorizontal(props);
          },
        }),
      }
}
);

//Navigator returns a component
export default Navigator;

