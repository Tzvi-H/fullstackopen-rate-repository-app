import { View, StyleSheet, ScrollView } from "react-native";
import { Link } from "react-router-native";
import Text from "./Text";
import Constants from "expo-constants";
// import AppBarTab from "./AppBarTab";
// import SignInTab from "./SignInTab";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: Constants.statusBarHeight,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <Text
            style={{
              backgroundColor: "#24292e",
              color: "white",
              padding: 60,
            }}
            fontWeight="bold"
            fontSize="subheading"
          >
            Repositories
          </Text>
        </Link>
        <Link to="/sign-in">
          <Text
            style={{
              backgroundColor: "#24292e",
              color: "white",
              padding: 60,
            }}
            fontWeight="bold"
            fontSize="subheading"
          >
            Sign In
          </Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
