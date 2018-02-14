import React from 'react';
import { View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class PerformanceScreen extends React.Component {
    static navigationOptions = {
        tabBarIcon: <Icon name="trophy" size={35} color="#a3a3a3" />
    };
    render() {
      return (
        <View style={{ flex: 1 }}>
            <ScrollView 
                style={{ 
                    flex: 1, 
                    backgroundColor: 'white', 
                    paddingTop: 20 
                    }}
            >
                <View />
            </ScrollView> 
        </View>   
      );
    }
  }

