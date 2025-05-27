import { Tabs } from "expo-router";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import React from "react";

export default function TabLayout() {
  return(
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#56B521',
        headerStyle:{backgroundColor:'#EDF2C9',},
        headerShadowVisible: false,
        headerTintColor: '#DC5F87',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Sobre Nós',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="toDoList"
        options={{
          title: 'Listas',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'book' : 'book-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="buscarCEP"
        options={{
          title: 'Localização',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'earth' : 'earth-outline'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}