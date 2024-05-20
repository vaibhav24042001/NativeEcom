import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Layout from "../components/Layout/Layout";
import Category from "../components/Layout/category/Category";
import Banner from "../components/Layout/Banner/Banner";
import Product from "../components/Layout/products.js/Product";

const Home = () => {
  return (
    <ScrollView>
      <Layout>
        <Category />
        <Banner />
        <Product />
      </Layout>
    </ScrollView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
