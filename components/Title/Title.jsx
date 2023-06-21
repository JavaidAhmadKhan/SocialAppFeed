
import { View, Text, SafeAreaView } from "react-native";
import PropTypes from 'prop-types'
import style from "./style";

const Title = props => {

  return (
    <SafeAreaView>
      <View style={style.titleContainer}>
        <Text style={style.title}>{props.title}</Text>
      </View>
    </SafeAreaView>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired
}

export default Title;
