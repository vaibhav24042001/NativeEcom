import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  //function
  const handlesearch = () => {
    console.log(searchText);
    setSearchText("");
  };

  return (
    <View
      style={{
        height: 90,
        backgroundColor: "lightgray",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
      }}
    >
      <View style={styles.container}>
        <TextInput
          style={styles.inputbox}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
        ></TextInput>
        <TouchableOpacity style={styles.searchBTN} onPress={handlesearch}>
          <FontAwesome name="search" style={styles.icon}></FontAwesome>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  inputbox: {
    borderWidth: 0.3,
    width: "100%",
    position: "absolute",
    left: 10,
    height: 40,
    color: "#000000",
    backgroundColor: "#ffffff",
    paddingLeft: 32,
    borderRadius: 20,
    marginLeft: 10,
    fontSize: 15,
  },
  searchBTN: {
    position: "absolute",
    left: "95%",
  },
  icon: {
    color: "#000000",
    fontSize: 18,
  },
});
export default Header;
