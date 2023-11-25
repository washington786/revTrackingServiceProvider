import { StyleSheet, View } from "react-native";
import React from "react";
import Card from "./Card";
import Top from "./Top";

const TopWrapper = () => {
  let today: Date | any = new Date();
  return (
    <>
      <Top today={today} />
      <View style={styles.con}>
        <Card iconName="archive" title="total orders" total={7} />
        <Card iconName="clock" title="total pending" total={5} />
        <Card iconName="truck" title="total dispatch" total={2} />
      </View>
    </>
  );
};

export default React.memo(TopWrapper);

const styles = StyleSheet.create({
  con: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
