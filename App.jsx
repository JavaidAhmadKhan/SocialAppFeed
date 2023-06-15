import { FlatList, Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import Title from "./components/Title/Title";
import UserStory from "./components/UserStory/UserStory";
import DATA from "./data";
import style from "./main";

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={style.header}>
          <Title title="Lets Explore" />
          <Pressable style={style.messageIcon}>
            <FontAwesomeIcon icon={faEnvelope} color="#CACDDE" size={20} />
            <View style={style.messageNumberContainer}>
              <Text style={style.messageNumber}>2</Text>
            </View>
          </Pressable>
        </View>
        <View style={style.userStoryContainer}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={DATA}
            renderItem={({ item }) => <UserStory name={item.name} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
