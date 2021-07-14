import React from "react";
import { Image, Text } from "react-native";
import { List } from "native-base";

const ProductItem = ({ product }) => {
  return (
    <List.Item>
      {/* <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: product.img }}
        /> */}
      {product.name}
    </List.Item>
  );
};
export default ProductItem;
