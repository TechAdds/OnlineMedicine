import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  TextInput,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { addToCart } from "../redux/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import UploadImage from "./UploadImage";
const url = "https://course-api.com/react-useReducer-cart-project";

const StoreContainer = () => {
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    fetch("https://sanjanasanikommu.github.io/products/products.json")
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({ item }) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {"."}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: "100%",
          backgroundColor: "#C8C8C8",
        }}
      />
    );
  };

  const getItem = (item) => {
    // Function for click on an item
    alert("Id : " + item.id + " Title : " + item.title);
  };

  const dispatch = useDispatch();
  const [Data, setData] = useState();

  useEffect(() => {
    // console.log("cart", cart);
    fetch("https://sanjanasanikommu.github.io/products/products.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  console.log(Data);

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
            {item.isPresReq === "Yes" && <UploadImage />}
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
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />

        <FlatList
          data={filteredDataSource}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={renderStoreItems}
        />
        {/* <FlatList
          data={Data}
          renderItem={renderStoreItems}
          keyExtractor={(item) => item.id}
          ListFooterComponent={() => <View style={{ height: 200 }} />}
        /> */}
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
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: "#009688",
    backgroundColor: "#FFFFFF",
  },
});
