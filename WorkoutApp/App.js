import React from 'react';
import { Provider } from 'react-redux';


import store from './store';
import AppNavigation from './src/Navigation';
import HRContainerGradient from './src/UI/HRContainers/HRContainerGradient';

//There is a intergration of Redux and React Navigation
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HRContainerGradient 
        colors={['#009ee8', '#16ff9e']} 
        start={[1, 0]}
        end={[0, 1]}
        >
          {/*Since Navigator returns a component, the component will*/}
          {/*correspond to the current selected component in the navigator*/}
          <AppNavigation />
        
        </HRContainerGradient>
      </Provider>
    );
  }
}

export default App;
