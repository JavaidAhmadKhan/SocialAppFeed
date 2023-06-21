import { useWindowDimensions } from "react-native";
import DeviceInfo from "react-native-device-info";

const { width, height } = useWindowDimensions.get("window");
const isSmall = width <= 375 && !DeviceInfo.hasNotch();

const guidelineBaseWidth = () => {
  if (isSmall) {
    return 300;
  }
  return 350;
};

const guidelineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

const guidelineBaseFonts = () => {
  if (width > 410) {
    return 430;
  }

  return 400;
};

const horizontalScale = (size) => (height / guidelineBaseWidth()) * size;
const verticalScale = (size) => (height / guidelineBaseHeight()) * size;
const ScaleFontSize = (size) =>
  Math.round((size * width) / guidelineBaseFonts());

export { horizontalScale, verticalScale, ScaleFontSize };
