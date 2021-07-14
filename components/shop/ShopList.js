import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import ShopItem from "./ShopItem";
import { List, Spinner, Box, StyleSheet, Center } from "native-base";
import { Title } from "../../styles";
import React from "react";

const ShopList = ({ navigation }) => {
  const loading = useSelector((state) => state.shops.loading);

  const shops = useSelector((state) => state.shops.shops);

  if (loading) return <Spinner />;
  const shopList = shops.map((shop) => (
    <ShopItem navigation={navigation} shop={shop} key={shop.id} />
  ));

  return <List>{shopList}</List>;
};
export default ShopList;
