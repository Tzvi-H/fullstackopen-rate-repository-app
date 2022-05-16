import { View, Image, StyleSheet } from "react-native";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <Image style={styles.logo} source={{ uri: item.ownerAvatarUrl }} />
      <Text>Full Name:{item.fullName}</Text>
      <Text>Description:{item.description}</Text>
      <Text>Language:{item.language}</Text>
      <Text>
        Stars:
        {item.stargazersCount >= 1000
          ? `${(item.stargazersCount / 1000).toFixed(1)}k`
          : item.stargazersCount}
      </Text>
      <Text>
        Forks:
        {item.forksCount > 1000
          ? `${(item.forksCount / 1000).toFixed(1)}k`
          : item.forksCount}
      </Text>
      <Text>Reviews:{item.reviewCount}</Text>
      <Text>Ratings:{item.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
