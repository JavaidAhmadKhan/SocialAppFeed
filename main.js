import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingTop: 30,
    paddingRight: 26,
  },
  messageIcon: {
    backgroundColor: "#F9FAFB",
    padding: 12,
    borderRadius: 100,
  },
  messageNumberContainer: {
    width: 10,
    height: 10,
    backgroundColor: "#F35BAC",
    borderRadius: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 7,
    top: 10,
  },
  messageNumber: {
    color: "#FFFFFF",
    fontWeight: 600,
    fontSize: 6,
    fontFamily: "Inter-SemiBold",
    lineHeight: 7,
  },
  userStoryContainer: {
    marginHorizontal: 26,
  },
});

export default style;
