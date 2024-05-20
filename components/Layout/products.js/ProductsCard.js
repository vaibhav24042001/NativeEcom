import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ p }) => {
  const navigation = useNavigation();

  //more details btn
  const handleMoreButton = (id) => {
    navigation.navigate("productDetails", { _id: id });
    console.log(id);
  };
  // add t0o cart
  const handleAddToCart = () => {
    alert("Item Adeed");
  };
  return (
    <View>
      <View style={Styles.card}>
        <Image style={Styles.cardImage} source={{ uri: p?.imageUrl }}></Image>
        <Text style={Styles.cardTitle}> {p?.name}</Text>
        <Text style={Styles.cardDesc}>
          {p?.description.substring(0, 30)}...more
        </Text>
        <View style={Styles.BtnContainer}>
          <TouchableOpacity
            style={Styles.btn}
            onPress={() => handleMoreButton(p._id)}
          >
            <Text style={Styles.btnText}>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.btncart} onPress={handleAddToCart}>
            <Text style={Styles.btnText}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default ProductCard;

const Styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "Lightgray",
    marginVertical: 5,
    marginHorizontal: 8,
    width: "45%",
    padding: 10,
    backgroundColor: "#ffffff",
    justifyContent: "center",
  },
  cardImage: {
    height: 100,
    width: "100%",
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardDesc: {
    fontSize: 10,
    textAlign: "left",
  },
  BtnContainer: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "gray",
    height: 20,
    width: 60,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  btncart: {
    backgroundColor: "red",
    height: 20,
    width: 60,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 13,
  },
});
