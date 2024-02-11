import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../constants/Colors";
import { Product } from "../types";
type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image || "" }}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: "50%",
  },

  image: {
    width: "100%",
    aspectRatio: 1,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },

  price: {
    color: Colors.light.tint,
  },
});
