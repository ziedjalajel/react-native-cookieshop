import { List, Spinner, Box, Center, View } from "native-base";
import { useSelector } from "react-redux";
import { Title } from "../../styles";
import ProductItem from "./ProductItem";
import React from "react";

const ProductsList = (props) => {
  const loading = useSelector((state) => state.products.loading);

  const products = useSelector((state) => state.products.products);
  const productsList = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  console.log(productsList);
  if (loading) return <Spinner />;
  return (
    <View>
      <Title style={{ color: "black" }}>Products List</Title>
      <List space={6} my={2}>
        {productsList}
      </List>
    </View>
  );
};
export default ProductsList;
