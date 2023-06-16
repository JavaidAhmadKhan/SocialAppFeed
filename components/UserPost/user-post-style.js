import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  userInformationContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userInformation: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  userPostContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#EFF2F6",
    marginBottom: 20,
  },

  image: {
    borderWidth: 1,
    borderColor: "#F35BAC",
    padding: 3,
    borderRadius: 100,
  },

  name: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
    color: "#000000",
    fontFamily: "Inter-SemiBold",
  },
  location: {
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 15,
    fontFamily: "Inter-SemiBold",
    color: "#79869F",
  },
  post: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    marginVertical: 16,
  },
  userPostStats: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    paddingBottom: 20,
  },

  userPostStatText: {
    color: "#79869F",
  },

  userPostStatIcon: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});

export default style;
