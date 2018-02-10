import { TabNavigator, TabBarBottom, TabBarTop } from 'react-navigation';
import HomeScreen from './Main/HomeScreen';
import WorkoutsScreen from './Main/WorkoutsScreen';


const Navigator = TabNavigator({
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
    {
        tabBarComponent: TabBarTop,
        tabBarPosition: 'top',
        animationEnabled: true,
        swipeEnabled: true,
        tabBarOptions: {
            style: {
                position: 'absolute',
                backgroundColor: 'transparent',
                top: 0,
                left: 0,
                right: 0,
                elevation: 0
            },
            labelStyle: {
                fontSize: 12,
                color: 'white'
            },
        }
    }
    ),
  },
  Workouts: {
    screen: WorkoutsScreen,
  },
  Pome: {
    screen: HomeScreen,
  },
  Lome: {
    screen: HomeScreen,
  },
},
{
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
        style: {
            height: 55,
            padding: 5
        },
    }
}
);

//Navigator returns a component
export default Navigator;

