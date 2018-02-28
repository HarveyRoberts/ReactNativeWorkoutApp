import { addNavigationHelpers } from 'react-navigation';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addListener } from '../../store';

import NavigationStack from './NavigationStack';
 
class AppNavigation extends Component {
    render() {
      const { navigationState, dispatch } = this.props;
      return (
        <NavigationStack
          navigation={addNavigationHelpers({ dispatch, state: navigationState, addListener })}
        />
      );
    }
}

const mapStateToProps = state => ({
      navigationState: state.NavReducer
  });


export default connect(mapStateToProps)(AppNavigation);

