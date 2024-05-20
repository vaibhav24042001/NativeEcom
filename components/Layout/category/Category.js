import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import { categoryData } from "../../../data/CategoryData";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Category = () => {
  const navigation = useNavigation();
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        {categoryData?.map((item) => (
          <View key={item._id}>
            <TouchableOpacity
              style={styles.catcontainer}
              onPress={() => {
                navigation.navigate(item.path);
              }}
            >
              <FontAwesome
                name={item.icon}
                style={styles.caticon}
              ></FontAwesome>
              <Text style={styles.catTitle}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    padding: 5,
    flexDirection: "row",
  },
  catcontainer: {
    padding: 13,
    justifyContent: "center",
    alignItems: "center",
  },
  caticon: {
    fontSize: 30,
    verticalAlign: "top",
  },
  catTitle: {
    fontSize: 12,
  },
});
export default Category;
