import React from "react";
import styles from "../styles";

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { HomeBackground, TopStyling, Title } from "../styles";
import { SHOP_LIST } from "./Navigation/types";

const Home = ({ navigation }) => {
  return (
    <HomeBackground
      source={{
        uri: "https://lovingitvegan.com/wp-content/uploads/2020/10/Vegan-Chocolate-Chip-Cookies-25.jpg",
      }}
    >
      <TopStyling>
        <Title>Cookies and Beyond</Title>
        <Text
          style={{ color: "white" }}
          onPress={() => navigation.navigate(SHOP_LIST)}
        >
          Shops
        </Text>
      </TopStyling>
    </HomeBackground>
  );
};

export default Home;
