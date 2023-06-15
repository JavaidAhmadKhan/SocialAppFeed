
import { View, Text, SafeAreaView, Image } from "react-native";
import { useFonts } from 'expo-font';
import PropTypes from 'prop-types'

import style from "./style";

const Title = props => {
  const [fontsLoaded] = useFonts({
    'Inter-SemiBold': require('../../assets/fonts/Inter-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  Title.propTypes = {
    title: PropTypes.string.isRequired
  }

  return (
    <SafeAreaView>
      <View style={style.titleContainer}>
        <Text style={style.title}>{props.title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Title;
