import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { addToCart } from "../redux/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import UploadImage from "./UploadImage";
const url = "https://course-api.com/react-useReducer-cart-project";

const StoreContainer = () => {
  const dispatch = useDispatch();
  const [Data, setData] = useState();

  useEffect(() => {
    // console.log("cart", cart);
    fetch("https://sanjanasanikommu.github.io/products/products.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  console.log(Data);

  state = { language: "" };

  handleLanguage = (langValue) => {
    this.setState({ language: langValue });
  };

  const StoreItems = () => {
    const renderStoreItems = ({ item }) => {
      return (
        <View style={styles.storeItem}>
          <View style={styles.storeItemImg}>
            <Image style={styles.storeItemImage} source={{ uri: item.image }} />
          </View>

          <View style={styles.storeItemInfo}>
            <Text style={styles.storeItemTitle}>{item.title}</Text>
            <Text style={styles.storeItemPrice}>${item.price}</Text>
            <Text> Doctor Prescription Required: {item.isPresReq}</Text>
            {item.isPresReq === "Yes" && (
              <UploadImage onSelectLanguage={this.handleLanguage} />
            )}
            {item.instock === "no" && (
              <TouchableOpacity
                onPress={() => {
                  if (item.instock === "no") {
                    Alert.alert("Item is not available in Stock");
                  } else {
                    dispatch(addToCart(item));
                  }
                }}
                style={styles.addToCartDisabled}
              >
                <Text style={styles.addToCartText}>Add to Cart</Text>
              </TouchableOpacity>
            )}

            {item.instock === "yes" && (
              <TouchableOpacity
                onPress={() => {
                  if (item.isPresReq === "Yes") {
                    console.log("Sanajna" + this.props.language);
                    Alert.alert(
                      "Please upload doctor prescription before adding products to cart"
                    );
                    // dispatch(addToCart(item));
                  } else {
                    dispatch(addToCart(item));
                  }
                }}
                style={styles.addToCart}
              >
                <Text style={styles.addToCartText}>Add to Cart</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      );
    };

    return (
      <View>
        <FlatList
          data={Data}
          renderItem={renderStoreItems}
          keyExtractor={(item) => item.id}
          ListFooterComponent={() => <View style={{ height: 200 }} />}
        />
      </View>
    );
  };
  return (
    <View>
      <StoreItems />
    </View>
  );
};

export default StoreContainer;

const styles = StyleSheet.create({
  storeItem: {
    flexDirection: "row",
    padding: 10,
    marginBottom: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "white",
    justifyContent: "center",
    marginVertical: 0,
  },
  storeItemImg: {
    width: "30%",
    height: 100,
    borderRadius: 5,
    overflow: "hidden",
  },
  storeItemImage: {
    width: "100%",
    height: "100%",
  },
  storeItemInfo: {
    width: "70%",
    padding: 10,
  },
  uploadItemInfo: {
    padding: 15,
  },
  storeItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  storeItemPrice: {
    fontSize: 16,
    color: "red",
  },
  addToCart: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartDisabled: {
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  addToCartText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
