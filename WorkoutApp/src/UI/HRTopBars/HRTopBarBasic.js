import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class HRTopBarBasic extends Component {
    /**PROPS:
     * onPressLeftIcon: The press event for the left icon
     * leftIconName: The name of the left icon
     * leftIconSize: The size of the left icon
     * leftIconColor: The color of the left icon
     * onPressRightIcon: The press event for the right icon
     * rightIconName: The name of the right icon
     * rightIconSize: The size of the right icon
     * rightIconColor: The color of the right icon
     * title: the title of the header
     * bgColor: Background color of the header
     */
  render() {
    return (
      <View 
      style={[
          styles.container,
          {
              backgroundColor: this.props.bgColor
          }
      ]}
      >
          {/*Invisible icon to make placement with flex easier*/}
          <TouchableOpacity
          onPress={this.props.onPressLeftIcon}
          >
            <Icon
              name={this.props.leftIconName}
              size={this.props.leftIconSize}
              color={this.props.leftIconColor}
              //style={styles.doWorkoutTabIcon}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{this.props.title}</Text>
          <TouchableOpacity
            onPress={this.props.onPressRightIcon}
          >
            <Icon
              name={this.props.rightIconName}
              size={this.props.rightIconSize}
              color={this.props.rightIconColor}
              //style={styles.doWorkoutTabIcon}
            />
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    top: 0
  },
  title: {
    fontSize: 21,
    color: '#B9FCFE',
    marginTop: 5
  }
});
