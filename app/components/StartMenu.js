import { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

class StartMenu extends Component {
  // Checks if the user is logged in
  componentDidMount() {
    this.checkLoggedIn();
  }

  // Checks to see if AsyncStorage is empty before navigating home
  checkLoggedIn = async () => {
    const userID = await AsyncStorage.getItem("@user_id");
    const sessionToken = await AsyncStorage.getItem("@session_token");

    if (userID && sessionToken) {
      this.props.navigation.navigate("Home");
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lewis Hardisty | StuNo: 19082641</Text>
        <Text style={styles.title}>Mobile Development assignemt </Text>

        <TouchableOpacity
          style={{ marginBottom: 20, marginTop: 20 }}
          onPress={() => this.props.navigation.navigate("Sign Up Screen")}
        >
          <Text style={styles.button}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Login Screen")}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    backgroundColor: "#B4869F",
    padding: 5,
    borderRadius: 30,
    fontSize: 20,
  },
  title: {
    fontSize: 30,
  },
});

export default StartMenu;
