import * as React from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function CustomHeader() {
  return (
    <View style={{flexDirection: 'row', height: 50, borderWidth: 1, borderColor: 'red'}}>
      <View style={{flex: 1, justifyContent: 'center', borderColor: 'red', borderWidth: 1}}>
        <Image style={{width: 30, height: 30, marginLeft: 5}} source={require('./assets/menu.png')} resizeMode="contain" />
      </View>
      <View style={{flex: 1.5, justifyContent: 'center', borderColor: 'red', borderWidth: 1}}>
        <Text style={{textAlign: 'center'}}>Title</Text>
      </View>
      <View style={{flex: 1, borderColor: 'red', borderWidth: 1}}></View>
    </View>
  )
}

function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    </SafeAreaView>
  );
}

function SettingScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Setting!</Text>
      </View>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Setting" component={SettingScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}