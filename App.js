import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
//import AppContainer from './app/containers/AppContainer';
//import CoinsReducer from './app/redux/reducers/CoinsReducer';
//import { createStore, applyMiddleware } from 'redux';
//import { Provider } from 'react-redux';
//import thunk from 'redux-thunk';
import NavigationTab from './app/components/NavigationTab';

//const createStoreWithMiddleware = applyMiddleware(thunk)(createStore); //create redux store that allowing dispatch actions 

//const store = createStoreWithMiddleware(CoinsReducer);

export default class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      //   <AppContainer />
      // </Provider>
      <NavigationTab />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
