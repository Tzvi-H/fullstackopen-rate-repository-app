import { View, StyleSheet } from "react-native";
import Text from "./Text";

const AppBarTab = () => {
  return (
    <View>
      <Text
        style={{
          backgroundColor: "#24292e",
          color: "white",
          padding: 48,
        }}
        fontWeight="bold"
        fontSize="subheading"
      >
        Repositories
      </Text>
    </View>
  );
};

export default AppBarTab;
