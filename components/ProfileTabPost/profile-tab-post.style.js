import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  profileTabPostsContainer: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: "#FFFFFF",
  },
  imageContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 4,
    paddingHorizontal: 21,
  },
  image: {
    maxWidth: 157,
    maxHeight: 106,
  },
  lastImageContainer: {
    marginBottom: 30,
  },
});

export default style;
