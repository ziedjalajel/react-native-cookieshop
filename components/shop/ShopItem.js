import React from "react";
import { Text, ListItem, Image } from "react-native";
import { ShopItemStyled } from "../../styles";
import { List } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { SHOP_DETAIL } from "../Navigation/types";

const ShopItem = ({ shop, navigation }) => {
  return (
    <List.Item onPress={() => navigation.navigate(SHOP_DETAIL, { shop })}>
      {/* <Image
        style={{ width: "100px", height: "100px" }}
        source={{ uri: shop.image }}
      /> */}
      {shop.name}
    </List.Item>
  );
};

export default ShopItem;
