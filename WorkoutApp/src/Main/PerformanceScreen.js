import React from 'react';
import { View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class PerformanceScreen extends React.Component {
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
                <View >  
                    
                </View>
            </ScrollView> 
        </View>   
      );
    }
  }

