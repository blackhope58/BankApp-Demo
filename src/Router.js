import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Icon2 from 'react-native-vector-icons/dist/Ionicons';

import Login from './Pages/Login';

import Home from './Pages/Home';
import MoneyTransfer from './Pages/MoneyTransfer';
import Settings from './Pages/Settings';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabRouter({route}) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        animation: 'slide_from_right',
        tabBarStyle: {height: 80},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        initialParams={route}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={focused ? styles.tabBarIconStyle : null}>
              <Icon
                name={'home'}
                size={35}
                color={focused ? '#3733BF' : '#4d4d4d'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MoneyTransfer"
        component={MoneyTransfer}
        initialParams={route}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={focused ? styles.tabBarIconStyle : null}>
              <Icon
                name={'send'}
                size={30}
                color={focused ? '#3733BF' : '#4d4d4d'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={focused ? styles.tabBarIconStyle : null}>
              <Icon2
                name={'settings-sharp'}
                size={30}
                color={focused ? '#3733BF' : '#4d4d4d'}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Router({route}) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="HomeTabRouter" component={HomeTabRouter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;

const styles = StyleSheet.create({
  tabBarIconStyle: {
    backgroundColor: '#f0f0f0',
    width: 55,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  tabBarNotification: {
    backgroundColor: '#fecb00',
    width: 10,
    height: 10,
    borderRadius: 5,
    position: 'absolute',
  },
});
