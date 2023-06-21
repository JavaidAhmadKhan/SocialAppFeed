import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  profileImageContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  profileImageContent: {
    borderWidth: 1,
    padding: 4,
    borderColor: "#0150EC",
    borderRadius: 100,
    marginTop: 32,
  },
  profileImage: {
    height: 120,
    width: 120,
  },
  userNameContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  userName: {
    fontFamily: "Inter-SemiBold",
    color: "#022150",
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 24,
  },
  profileStatsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 24,
    marginTop: 16,
  },
  singleStatNumber: {
    color: "#022150",
    fontFamily: "Inter-SemiBold",
    fontWeight: 600,
    fontSize: 20,
    lineHeight: 24,
  },
  singleStatText: {
    marginTop: 6,
    color: "#79869F",
    fontFamily: "Inter-SemiBold",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
  singleStatContainer: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    alignItems: "center",
  },
  singleStatBorder: {
    borderRightWidth: 1,
    borderRightColor: "#E9EFF1",
  },
  border: {
    borderTopWidth: 1,
    borderColor: "#EFF2F6",
    marginVertical:16,
    marginHorizontal:28,
  },
});

export default style;
