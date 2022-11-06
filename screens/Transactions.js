import { DrawerItem } from "@react-navigation/drawer";
import { iteratorSymbol } from "immer/dist/internal";
import React from "react";
import { View, Button, StyleSheet, Text } from "react-native";

import firebase from "../../database/firebase";

const db = firebase.firestore();
const Tranasactions = () => {
  db.collection("order")
    .get()
    .then((snap) => {
      snap.forEach((order) => {
        order.title, order.quantity, order.price;
      });
    });
  return (
    <View style={styles.screenContainer}>
      {transactions.length === 0 && <Text>NO ORDER IS PLACED</Text>}

      <Text>
        ORDER DETAILS :{"\n"}
        Your Address: E-909, Vertex , Brindavan Colony , Nizampet , Hyderbad
      </Text>
      <Text>Item: {order.title} </Text>
      <Text>Quantity: {order.quantity}</Text>
      <Text>Price: {order.price}</Text>
      <Button title="Refill Order">refill</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,

    padding: 16,
  },
});

export default Tranasactions;
