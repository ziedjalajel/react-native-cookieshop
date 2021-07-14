import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { ThemeProvider } from "styled-components";
import store from "./store";
import Home from "./components/Home";
import ShopList from "./components/shop/ShopList";
import ProductList from "./components/products/ProductList";
import ShopDetail from "./components/shop/ShopDetail";

import {
  NativeBaseProvider,
  Box,
  Switch,
  VStack,
  Heading,
  Center,
} from "native-base";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./components/Navigation/index";

export default function App() {
  const theme = {
    light: {
      mainColor: "#242424", // main font color
      backgroundColor: "#fefafb", // main background color
      pink: "#ff85a2",
      red: "#ff3232",
    },
  };

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <ThemeProvider theme={theme.light}>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
