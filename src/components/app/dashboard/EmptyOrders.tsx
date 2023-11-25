import { Image, Platform, StyleSheet, View } from "react-native";
import React from "react";
import Lottie from "lottie-react-native";
import { Text } from "react-native-paper";

const isIos = Platform.OS==="ios";

const EmptyOrders = () => {
  return (
    <View style={styles.con}>
        {
            isIos ?
            <Lottie
              source={require("../../../lottie/empty.json")}
              autoPlay
              loop
              autoSize
              style={styles.lot}
            />:
            <Image source={require('../../../lottie/empty.png')} style={styles.img}/>
        }
      <Text style={styles.text}>
        Oopps！you don't have any orders at the moment. please check later on❗️
      </Text>
    </View>
  );
};

export default React.memo(EmptyOrders);

const styles = StyleSheet.create({
  lot: {
    maxHeight: 500,
    minHeight: 500,
  },
  con: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  text:{
    textAlign:"center",
    paddingHorizontal:20,
    marginTop:-20
  },
  img:{
    height:"100%",
    resizeMode:"contain",
    maxHeight: 400,
    minHeight: 400
  }
});
