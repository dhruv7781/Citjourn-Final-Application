import React, { useState } from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import { TouchableWithoutFeedback } from "react-native";


const SearchScreen = (props) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  return (
    <View style={styles.whole}>
    <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
      <View>
        <Ionicons name="arrow-back" color="white" onPress={() => props.navigation.goBack()} size={30}/>
      </View>
      <View
        style={
          !clicked
            ? styles.searchBar__unclicked
            : styles.searchBar__clicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          autoFocus={true}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked or not */}
        {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
              setSearchPhrase("")
          }}/>
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View>
          <Ionicons
            name="arrow-forward-outline"
            size={30}
            color="white"
            onPress={() => {
              Keyboard.dismiss();
             
            }}
          />
        </View>
      )}
    </SafeAreaView>
    </TouchableWithoutFeedback>
    </View>
  );
};
export default SearchScreen;

// styles
const styles = StyleSheet.create({
  whole: {
    flex: 1,
    backgroundColor: "#191720",
  },
  container: {
    margin: 10,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginTop: 50,
    
   

  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});