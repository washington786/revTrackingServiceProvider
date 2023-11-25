import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Products from "../../../../app/main/products/Products";
import ViewProduct from "../../../../app/main/products/ViewProduct";

const ProdStack = createStackNavigator();

const ProductStack = () => {
  return (
    <ProdStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="products"
    >
      <ProdStack.Screen name="products" component={Products} />
      <ProdStack.Screen name="viewProducts" component={ViewProduct} />
    </ProdStack.Navigator>
  );
};

export default ProductStack;

const styles = StyleSheet.create({});
