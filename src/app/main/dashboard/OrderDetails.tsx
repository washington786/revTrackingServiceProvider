import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import MainView from "../../../globals/MainView";
import HeaderBack from "../../../components/app/HeaderBack";
import DetailsCard from "../../../components/app/dashboard/DetailsCard";
import {
  Button,
  Caption,
  Switch,
  Provider,
} from "react-native-paper";
import { GlobalColors } from "../../../infrastructure/GlobalColors";
import DialogDetails from "../../../components/app/dashboard/DialogDetails";

const OrderDetails = () => {
  const route = useRoute();
  const param = route.params;

  const { order } = param;

  const {
    customerName,
    modeOfTransport,
    address,
    orderNo,
    isPaid,
    amount,
    products,
    despatchDate,
    status,
  } = order;

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const [state, setState] = useState(false);

  const onChange = () => {
    setState(!state);
  };

  const changeStatus = () => {
    showDialog();
  };

  return (
    <MainView>
      <HeaderBack screen="home" androidScreenName="order details" />
      <Provider>
        <DetailsCard
          amount={amount}
          dDate={despatchDate}
          isPaid={isPaid}
          location={address}
          orderId={orderNo}
          products={products}
          status={status}
          time={despatchDate}
          userName={customerName}
        />
        <SwitchWrapper
          onChange={onChange}
          value={state}
          operation="Confirmed"
        />
        <SwitchWrapper onChange={onChange} value={state} operation="On it" />
        <SwitchWrapper onChange={onChange} value={state} operation="Packaged" />
        <SwitchWrapper onChange={onChange} value={state} operation="Packaged" />

        <Button
          buttonColor={GlobalColors.primary.darkGreen}
          style={styles.btn}
          textColor="white"
          contentStyle={styles.conBtn}
          onPress={changeStatus}
        >
          change status
        </Button>

        <DialogDetails onDismiss={hideDialog} visible={visible} />
      </Provider>
    </MainView>
  );
};

type s = {
  value: boolean;
  onChange(): void;
  operation: string;
};

const SwitchWrapper = (props: s) => {
  return (
    <View style={styles.con}>
      <Switch
        value={props.value}
        onValueChange={props.onChange}
        color={GlobalColors.primary.darkGreen}
      />
      <Caption style={styles.cap}>{props.operation}</Caption>
    </View>
  );
};

export default React.memo(OrderDetails);

const styles = StyleSheet.create({
  con: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  cap: {
    paddingHorizontal: 8,
  },
  btn: {
    paddingVertical: 8,
    marginHorizontal: 10,
    borderRadius: 0,
    marginVertical: 10,
  },
  conBtn: {
    borderRadius: 0,
    textTransform: "uppercase",
  },
});
