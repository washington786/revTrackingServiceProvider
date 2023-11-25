import { StyleSheet, View } from "react-native";
import React from "react";
import { GlobalColors } from "../../../infrastructure/GlobalColors";
import { Caption, Text } from "react-native-paper";

import Icons from "react-native-vector-icons/Feather";
import { Divider } from "react-native-elements";

type details = {
  time: Date;
  userName: string;
  location: string;
  isPaid: boolean;
  orderId: string;
  amount: number;
  dDate: Date;
  status: string;
  products: [];
};
const DetailsCard = (props: details) => {
  return (
    <View style={styles.con}>
      <Caption style={styles.time}>
        {props.time.toLocaleTimeString("en-SA", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </Caption>
      <View>
        <Text variant="titleMedium" numberOfLines={1} ellipsizeMode="tail">
          {props.userName}
        </Text>
        <Location location={props.location}/>
        <Divider
          orientation="horizontal"
          width={0.5}
          color={GlobalColors.grey.l2}
        />

        <Order
          amount={props.amount}
          dDate={props.dDate}
          isPaid={props.isPaid}
          orderID={props.orderId}
          products={props.products}
          status={props.status}
        />
      </View>
    </View>
  );
};

type loc = {
  location: string;
};
const Location = (props: loc) => {
  return (
    <View style={styles.icon}>
      <Icons name="map-pin" size={20} color={GlobalColors.grey.l4} />
      <Caption numberOfLines={1} ellipsizeMode="tail" style={styles.loc}>
        {props.location}
      </Caption>
    </View>
  );
};

type order = {
  orderID: string;
  products: [];
  amount: number;
  dDate: Date;
  status: string;
  isPaid: boolean;
};
const Order = (props: order) => {
  return (
    <View style={styles.orderCon}>
      <Text>{props.orderID}</Text>
      <Row>
        <Caption>Product Name</Caption>
        {props.products.map((product, index) => {
          const { name } = product;
          return <Text key={index}>{name}• </Text>;
        })}
      </Row>
      <Row>
        <Caption>Total Amount</Caption>
        <Text>R{props.amount.toFixed(2)}</Text>
      </Row>
      <Row>
        <Caption>Despatch Date</Caption>
        <Text>
          {props.dDate.toLocaleDateString("en-SA", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
            month: "short",
            day: "numeric",
            year: "numeric",
            dateStyle: "full",
          })}
        </Text>
      </Row>
      <Row>
        <Caption>Status</Caption>
        <Text>{props.status}</Text>
      </Row>
      <Row>
        <Text>{props.isPaid === true && "Paid"}</Text>
      </Row>
    </View>
  );
};

type wrap = {
  children: any;
};
export const Row = (props: wrap) => {
  return <View style={styles.Wrap}>{props.children}</View>;
};
export default React.memo(DetailsCard);

const styles = StyleSheet.create({
  con: {
    marginVertical: 12,
    marginHorizontal: 10,
    backgroundColor: GlobalColors.card,
    paddingVertical: 8,
    paddingHorizontal: 5,
  },
  icon: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
  },
  loc: {
    paddingHorizontal: 8,
  },
  time: {
    textAlign: "right",
    paddingHorizontal: 8,
  },
  orderCon: {
    paddingVertical: 5,
  },
  Wrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
});
