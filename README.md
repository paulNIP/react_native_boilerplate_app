# React Native - React Navigaion Mix

React Navigation Mix Study :)

## Demo

### 첫 화면

<img scr="https://user-images.githubusercontent.com/63582123/132478184-d71f3169-d114-47ae-a2b5-ffecd1634ca4.jpeg" width="347" height="599">

### Register 버튼을 누른 화면

<img scr="https://user-images.githubusercontent.com/63582123/132478193-6583e850-d34a-4313-a4e3-a4001780f771.jpeg" width="347" height="599">

### Login 버튼을 누른 화면, Home 화면

<img scr="https://user-images.githubusercontent.com/63582123/132478196-a30fa137-e77f-4cfc-8183-6649e3ea88ae.jpeg" width="347" height="599">

### Home Detail 버튼을 누른 화면

<img scr="https://user-images.githubusercontent.com/63582123/132478200-138d3ee4-ce91-4900-8691-0fd1eed12924.jpeg" width="347" height="599">

### Setting 화면

<img scr="https://user-images.githubusercontent.com/63582123/132478205-228d34e0-3fb8-4fba-b599-4b9ba3d69fe5.jpeg" width="347" height="599">

### Setting Detail 버튼을 누른 화면

<img scr="https://user-images.githubusercontent.com/63582123/132478214-4ae841ae-dea6-465f-b41d-dae3a9335b70.jpeg" width="347" height="599">

### 메뉴 바 화면

<img scr="https://user-images.githubusercontent.com/63582123/132478231-8e2e4605-0326-4441-aff7-8e5995dc31be.jpeg" width="347" height="599">

### Nomtifications 버튼을 누른 화면

<img scr="https://user-images.githubusercontent.com/63582123/132478240-613a6746-231d-417b-b8bb-90a88f1b8eae.jpeg" width="347" height="599">

### Logout 버튼을 누른 화면, 첫 화면

<img scr="https://user-images.githubusercontent.com/63582123/132478184-d71f3169-d114-47ae-a2b5-ffecd1634ca4.jpeg" width="347" height="599">

## Installation

```bash
npm install @react-navigation/native --save
```

```bash
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view --save
```

```bash
npm install @react-navigation/stack --save
```

```bash
npm install @react-navigation/bottom-tabs --save
```

```bash
npm install @react-navigation/drawer --save
```

## Usage

### App.js

```jsx
import * as React from "react";
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

function CustomHeader({ title, isHome, navigation }) {
  return (
    <View style={{ flexDirection: "row", height: 50 }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        {isHome ? (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={{ width: 30, height: 30, marginLeft: 7 }}
              source={require("./assets/menu.png")}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={{ width: 20, height: 20, marginLeft: 5 }}
              source={require("./assets/left-arrow.png")}
              resizeMode="contain"
            />
            <Text>Back</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={{ flex: 1.5, justifyContent: "center" }}>
        <Text style={{ textAlign: "center" }}>{title}</Text>
      </View>
      <View style={{ flex: 1 }}></View>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Home" isHome={true} navigation={navigation} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#b3e5fc",
        }}
      >
        <Text style={{ fontSize: 50 }}>Home :)</Text>
        <TouchableOpacity
          style={{ marginTop: 100 }}
          onPress={() => navigation.navigate("HomeDetail")}
        >
          <Text style={{ color: "red", fontSize: 20 }}>
            Home Detail 로 가기
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function HomeScreenDetail({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Home Detail" navigation={navigation} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ccff90",
        }}
      >
        <Text style={{ fontSize: 50 }}>Home Detail :)</Text>
      </View>
    </SafeAreaView>
  );
}

function SettingScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Setting" isHome={true} navigation={navigation} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f8bbd0",
        }}
      >
        <Text style={{ fontSize: 50 }}>Setting :)</Text>
        <TouchableOpacity
          style={{ marginTop: 100 }}
          onPress={() => navigation.navigate("SettingDetail")}
        >
          <Text style={{ color: "red", fontSize: 20 }}>
            Setting Detail 로 가기
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function SettingScreenDetail({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Setting Detail" navigation={navigation} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffff8d",
        }}
      >
        <Text style={{ fontSize: 50 }}>Setting Detail :)</Text>
      </View>
    </SafeAreaView>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Notifications" navigation={navigation} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#a7ffeb",
        }}
      >
        <Text style={{ fontSize: 50 }}>Notifications :)</Text>
      </View>
    </SafeAreaView>
  );
}

function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Register" navigation={navigation} />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffe0b2",
        }}
      >
        <Text style={{ fontSize: 50 }}>Register :)</Text>
      </View>
    </SafeAreaView>
  );
}

function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#e6ceff",
        }}
      >
        <Text style={{ fontSize: 50 }}>WELCOME :)</Text>
        <TouchableOpacity
          style={{ marginTop: 100 }}
          onPress={() => navigation.navigate("HomeApp")}
        >
          <Text style={{ fontSize: 30, color: "blue" }}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 30 }}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={{ fontSize: 30, color: "red" }}>Resigter</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{ height: 150, alignItems: "center", justifyContent: "center" }}
      >
        <Image
          source={require("./assets/profile.png")}
          style={{ height: 120, width: 120, borderRadius: 60 }}
        />
      </View>
      <ScrollView style={{ margin: 20 }}>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => props.navigation.navigate("MenuTab")}
        >
          <Text style={{ fontSize: 20 }}>* Menu Tab *</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => props.navigation.navigate("Notifications")}
        >
          <Text style={{ fontSize: 20 }}>Notifications</Text>
        </TouchableOpacity>
      </ScrollView>
      <TouchableOpacity
        style={{ margin: 20 }}
        onPress={() => props.navigation.navigate("Login")}
      >
        <Text style={{ color: "red" }}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

const StackHome = createStackNavigator();

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen
        name="Home"
        component={HomeScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="HomeDetail"
        component={HomeScreenDetail}
        options={navOptionHandler}
      />
    </StackHome.Navigator>
  );
}

const StackSetting = createStackNavigator();

function SettingStack() {
  return (
    <StackSetting.Navigator initialRouteName="Setting">
      <StackSetting.Screen
        name="Settin"
        component={SettingScreen}
        options={navOptionHandler}
      />
      <StackSetting.Screen
        name="SettingDetail"
        component={SettingScreenDetail}
        options={navOptionHandler}
      />
    </StackSetting.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused
              ? require("./assets/home-black.png")
              : require("./assets/home.png");
          } else if (route.name === "Setting") {
            iconName = focused
              ? require("./assets/setting-black.png")
              : require("./assets/setting.png");
          }

          // You can return any component that you like here!
          return (
            <Image
              source={iconName}
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: "black",
        inactiveTintColor: "black",
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Setting" component={SettingStack} />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="MenuTab"
      drawerContent={(props) => CustomDrawerContent(props)}
    >
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}

const StackApp = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Login">
        <StackApp.Screen
          name="HomeApp"
          component={DrawerNavigator}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name="Login"
          component={LoginScreen}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name="Register"
          component={RegisterScreen}
          options={navOptionHandler}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
```
