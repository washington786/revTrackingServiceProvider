import { FlatList, StyleSheet, View } from "react-native";
import React from "react";
import { OrderData } from "../../../data/OrderDummyData";
import OrderCard from "./OrderCard";
import EmptyOrders from "./EmptyOrders";
import { useNavigation } from "@react-navigation/native";

const OrderList = () => {
  const navigation = useNavigation();

  const handleOnPress = (order: any) => {
    navigation.navigate("details", { order: order });
  };
  return (
    <View style={styles.main}>
      <FlatList
        data={OrderData}
        keyExtractor={(order) => {
          return order.id.toString();
        }}
        renderItem={(order) => {
          return (
            <OrderCard
              id={order.item.orderNo}
              isPaid={order.item.isPaid}
              mode={order.item.modeOfTransport}
              name={order.item.customerName}
              time={order.item.despatchDate}
              onPress={handleOnPress.bind(this, order.item)}
            />
          );
        }}
        contentContainerStyle={styles.con}
        ListEmptyComponent={<EmptyOrders />}
      />
    </View>
  );
};

export default OrderList;

const styles = StyleSheet.create({
  con: {
    flexGrow: 1,
  },
  main: {
    flexGrow: 1,
    height: "100%",
  },
});
