import React from "react";
import ProductsList from "../products/ProductList";
import {
  ShopDetailWrapper,
  ShopDetailImage,
  ShopDetailTitle,
} from "../../styles";
import { useSelector } from "react-redux";
import { Spinner } from "native-base";

const ShopDetail = ({ route }) => {
  // const loading = useSelector((state) => state.shops.loading);
  // if (loading) return <Spinner />;
  const { shop } = route.params;
  const products = useSelector((state) =>
    state.products.products.filter((_product) => _product.shopId === shop.id)
  );
  return (
    <>
      <ShopDetailWrapper>
        {/* <ShopDetailImage source={{ uri: shop.image }} /> */}
        <ShopDetailTitle>{shop.name}</ShopDetailTitle>
      </ShopDetailWrapper>
      <ProductsList productId={shop.products} />
    </>
  );
};
export default ShopDetail;
