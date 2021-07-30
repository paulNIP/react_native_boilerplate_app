import * as React from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

function CustomHeader({title, isHome, navigation}) {
  return (
    <View style={{flexDirection: 'row', height: 50}}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        {
          isHome ?
          <Image style={{width: 30, height: 30, marginLeft: 7}} source={require('./assets/menu.png')} resizeMode="contain" />
          : 
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => navigation.goBack()}>
            <Image style={{width: 20, height: 20, marginLeft: 5}} source={require('./assets/left-arrow.png')} resizeMode="contain" />
            <Text>Back</Text>
          </TouchableOpacity>
        }
      </View>

      <View style={{flex: 1.5, justifyContent: 'center'}}>
        <Text style={{textAlign: 'center'}}>{title}</Text>
      </View>
      <View style={{flex: 1}}></View>
    </View>
  )
}

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Home" isHome={true} navigation={navigation}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <TouchableOpacity style={{marginTop: 20}} onPress={() => navigation.navigate('HomeDetail')}>
          <Text>Go Home Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function HomeScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Home Detail" navigation={navigation}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Detail!</Text>
      </View>
    </SafeAreaView>
  );
}

function SettingScreen({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Setting" isHome={true}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Setting!</Text>
        <TouchableOpacity style={{marginTop: 20}} onPress={() => navigation.navigate('SettingDetail')}>
          <Text>Go Setting Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function SettingScreenDetail({navigation}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Setting Detail" navigation={navigation}/>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Setting Detail!</Text>
      </View>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false
})

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={navOptionHandler}/>
      <Stack.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler}/>
    </Stack.Navigator>
  )
}

function SettingStack() {
  return (
    <Stack.Navigator initialRouteName="Setting">
      <Stack.Screen name="Settin" component={SettingScreen} options={navOptionHandler}/>
      <Stack.Screen name="SettingDetail" component={SettingScreenDetail} options={navOptionHandler}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Setting" component={SettingStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}