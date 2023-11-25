import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { GlobalColors } from "../../../infrastructure/GlobalColors";
import { Avatar, Caption, Text } from "react-native-paper";

type info = {
  time: Date;
  name: string;
  id: string;
  mode: string;
  isPaid: boolean;
  onPress?(): void;
};

const OrderCard = (props: info) => {
  return (
    <TouchableOpacity
      style={styles.con}
      activeOpacity={0.5}
      onPress={props.onPress}
    >
      <Avatar.Icon icon={"account"} size={40} style={styles.icon} />
      <InfoWrapper
        id={props.id}
        isPaid={props.isPaid}
        mode={props.mode}
        name={props.name}
        time={props.time}
      />
    </TouchableOpacity>
  );
};

const InfoWrapper = (props: info) => {
  return (
    <View style={styles.info}>
      <Caption style={styles.time}>{`${props.time
        .toLocaleTimeString("en-SA", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          hourCycle: "h24",
        })
        .toString()}`}</Caption>
      <View style={styles.content}>
        <Text
          variant="titleSmall"
          style={styles.name}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {`${props.name}`}
        </Text>
      </View>
      <View style={styles.del}>
        <Caption
          numberOfLines={1}
          ellipsizeMode="tail"
        >{`${props.id}`}</Caption>
        <Caption
          numberOfLines={1}
          ellipsizeMode="tail"
        >{`${props.mode}`}</Caption>
        <Caption numberOfLines={1} ellipsizeMode="tail">
          {props.isPaid === true && "Paid"}
        </Caption>
      </View>
    </View>
  );
};

export default React.memo(OrderCard);

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: 10,
    marginHorizontal: 10,
    marginVertical: 8,
    paddingVertical: 6,
    backgroundColor: GlobalColors.card,
    elevation: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  info: {
    flex: 1,
  },
  time: {
    textAlign: "right",
  },
  icon: {
    backgroundColor: GlobalColors.greenVector,
  },
  content: {
    paddingHorizontal: 5,
  },
  name: {
    marginTop: -5,
  },
  del: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
