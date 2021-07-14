import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home";
import ShopDetail from "../shop/ShopDetail";
import ShopList from "../shop/ShopList";
import * as types from "./types";

const StackNavigator = () => {
  const { Screen, Navigator } = createStackNavigator();
  return (
    <Navigator
      initialRouteName={types.HOME}
      screenOptions={{
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
        headerTitleStyle: { fontStyle: "italic", fontWeight: "bold" },
      }}
    >
      <Screen
        name={types.HOME}
        component={Home}
        options={{ headerShown: false }}
      />
      <Screen
        name={types.SHOP_LIST}
        component={ShopList}
        options={{ title: "Shops" }}
      />
      <Screen
        name={types.SHOP_DETAIL}
        component={ShopDetail}
        options={({ route }) => ({ title: route.params.shop.name })}
      />
    </Navigator>
  );
};
export default StackNavigator;
