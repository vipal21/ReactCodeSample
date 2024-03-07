import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

import HomeScreen from "./app/screens/HomeScreen";
import Screen1 from "./app/screens/Screen1";
import Screen2 from "./app/screens/Screen2";
import Screen3 from "./app/screens/Screen3";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Home"
        screenOptions={{
          drawerType: 'front',
          drawerPosition: 'left',
          swipeEdgeWidth: 300,
          drawerHideStatusBarOnOpen: true,
          drawerStyle: {
            backgroundColor: '#cecece',
            width: 250,
          },
          drawerLabelStyle: styles.navBarLabelStyle
        }}
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            drawerIcon: () => (
              <FontAwesome name="home" size={22} color='#0707cd' />
            ),
            drawerLabelStyle: {color: 'red'},
            
          }}
        />  
        <Drawer.Screen 
          name="Settings" 
          component={Screen1} 
          options={{
            drawerIcon: () => (
              <FontAwesome name="gear" size={22} color='#0707cd' />
            ),
          }}
        />
        <Drawer.Screen 
          name="Account" 
          component={Screen2} 
          options={{
            drawerIcon: () => (
              <FontAwesome name="user" size={22} color='#0707cd' />
            ),
          }}
        />          
        <Drawer.Screen 
          name="Information" 
          component={Screen3}
          options={{
            drawerIcon: () => (
              <FontAwesome name="info-circle" size={22} color='#0707cd' />
          ),
        }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  navBarLabelStyle: {
    color: '#0707cd',
    fontSize: 16,
  }
});
