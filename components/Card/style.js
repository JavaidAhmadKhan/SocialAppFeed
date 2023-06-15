import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  card: {
    display: "flex",
    backgroundColor: "#79869F",
    padding: 30,
    width: 20,
    borderRadius: "50%",
  },
  textHeading: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
    fontStyle: "normal",
    color: "#000000",
  },
  textSubHeading: {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 15,
    fontStyle: "normal",
    color: "#79869F",
  },
});

export default styles;
