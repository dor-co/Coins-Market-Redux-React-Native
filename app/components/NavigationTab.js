import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppContainer from '../containers/AppContainer';
import { Provider } from 'react-redux';
import CoinsReducer from '../redux/reducers/CoinsReducer';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import PdfFilePage from './pdfFilePage';
import FavoriteList from './FavoriteList';
import Ionicons from 'react-native-vector-icons/Ionicons';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore); //create redux store that allowing dispatch actions 

const store = createStoreWithMiddleware(CoinsReducer);

function HomeScreen() {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    );
}

function FavoriteScreen() {
    return (
        <FavoriteList />
    );
}

function PfdScreen() {
    return (
        <PdfFilePage />
    );
}

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home-outline'
                : 'home-sharp';
            } else if (route.name === 'Favorite') {
              iconName = focused ? 'heart-outline' : 'heart-sharp';
            } else if (route.name === 'PDF') {
                iconName = focused ? 'document-outline' : 'document-sharp';
              }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#7b3790',
          inactiveTintColor: 'gray',
        }}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="PDF" component={PfdScreen} />
                <Tab.Screen name="Favorite" component={FavoriteScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}