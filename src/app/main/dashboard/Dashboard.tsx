import { StyleSheet, View } from "react-native";
import React from "react";
import MainView from "../../../globals/MainView";
import TopWrapper from "../../../components/app/dashboard/TopWrapper";
import { Text } from "react-native-paper";
import { Divider } from "react-native-elements";
import { GlobalColors } from "../../../infrastructure/GlobalColors";
import OrderList from "../../../components/app/dashboard/OrderList";

const Dashboard = () => {
  return (
    <MainView>
      <TopWrapper />
      <View style={styles.orders}>
        <Text style={styles.title} variant="titleMedium">
          Latest Orders
        </Text>
        <Divider
          orientation="horizontal"
          width={1}
          color={GlobalColors.grey.l1}
          style={styles.div}
        />
        <OrderList />
      </View>
    </MainView>
  );
};

export default React.memo(Dashboard);

const styles = StyleSheet.create({
  orders: {
    marginTop: 10,
  },
  title: {
    paddingHorizontal: 10,
  },
  div: {
    marginHorizontal: 10,
    paddingVertical: 3,
  },
});
