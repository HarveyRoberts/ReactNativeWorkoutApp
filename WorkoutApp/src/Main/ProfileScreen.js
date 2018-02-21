import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import HRContainerGradient from '../UI/HRContainers/HRContainerGradient';
import HRListItem from '../UI/HRLists/HRListItems/HRListItem';

export default class ProfileScreen extends React.Component {

  state={ show: false };

  
  showItem() {
    if (this.state.show) {
      return (
        <HRListItem title={'SHOW '} secondTitle="YEAHH" />
      );
    }
    return null;
  }

  render() {
    return (
      //Added padding to the top to leave space for header
      //since the header is in position absolute
      <ScrollView 
      style={{
        flex: 1,
      }}
      scrollEventThrottle={2}
      onScroll={event => {
        if (event.nativeEvent.contentOffset.y > 180) {
          !this.state.show ? this.setState({ show: true }) : null;
        } else {
          this.state.show ? this.setState({ show: false }) : null;
        }
      }}
      >
        <HRContainerGradient
          colors={['#0AB3E4', '#26EDA0']} 
          start={[1, 0]}
          end={[0, 1]}
          style={{ flex: 1, paddingTop: 82 }}
        >
          <View style={styles.outerProfileCircle}>
            <View style={styles.profileCircle}>
              <Image
                style={styles.profileImage}
                source={{
                  uri:
                    'https://cdn0.iconfinder.com/data/icons/users-android-l-lollipop-icon-pack/24/user-256.png'
                }}
              />
            </View>
          </View>
          <Text style={styles.profileUsersName}>{'Harvey\nRoberts'}</Text>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              height: 500,
              marginTop: 20,
              paddingTop: 15
            }}
          >
            <HRListItem title={'Name:'} secondTitle="Harvey" />
            <HRListItem
              title={'Email:'}
              secondTitle={'email.email@email.com'}
              secondTitleWidth={'50%'}
            />
            <HRListItem title={'Birthday:'} secondTitle="28/04/1998" />
            {this.showItem()}
          </View>
        </HRContainerGradient>
      </ScrollView>
        
    );
  }
}

const styles = StyleSheet.create({
  title: {
    color: 'grey',
    fontSize: 22,
    alignSelf: 'center'
  },
  listItem: {
    flexDirection: 'row',
    marginTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#EAEBEA'
  },
  listItemName: {
    width: '65%',
    marginTop: 18,
    fontSize: 17
  },
  outerProfileCircle: {
    marginBottom: 10,
    borderRadius: 150,
    backgroundColor: '#9FE6ED',
    width: 155,
    height: 155,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileCircle: {
    borderRadius: 150,
    backgroundColor: '#D9F6F7',
    width: 135,
    height: 135,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  profileImage: {
    height: 120,
    width: 120,
    alignSelf: 'center',
    opacity: 0.6
  },
  profileUsersName: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
