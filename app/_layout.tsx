import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { LogBox } from "react-native";

LogBox.ignoreAllLogs(true);

export default function RootLayout() {
  return(
    <>
    <StatusBar style="light" />
      <Stack
      screenOptions={{
        headerStyle:{backgroundColor:'white',},
        headerShadowVisible: false,
        headerTintColor: '#56B521',
      }}
      > 
        <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
        <Stack.Screen name="+not-found"/>
      </Stack>
    </>
  );
}