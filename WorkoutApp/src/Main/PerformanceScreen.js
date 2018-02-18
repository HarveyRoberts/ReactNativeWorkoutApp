import React from 'react';
import { View, ScrollView, Text } from 'react-native';


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
                    <Text>HI</Text>
                </View>
            </ScrollView> 
        </View>   
      );
    }
  }

