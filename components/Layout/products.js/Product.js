import { View, Text } from "react-native";
import React from "react";
import ProductCard from "./ProductsCard";
import { productData } from "../../../data/productsData";

const Product = () => {
  return (
    <View>
      {productData.map((p) => (
        <ProductCard key={p._id} p={p} />
      ))}
    </View>
  );
};

export default Product;
