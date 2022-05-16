import { View, StyleSheet, Pressable } from "react-native";
import Text from "./Text";

const AppBarTab = ({ handlePress }) => {
  return (
    <View>
      <Pressable onPress={handlePress}>
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
      </Pressable>
    </View>
  );
};

export default AppBarTab;
