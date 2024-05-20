import { View, Text, StatusBar } from "react-native";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <StatusBar />
      <Header />
      <View>{children}</View>
      <Footer />
    </>
  );
};
export default Layout;
