import { FlatList, Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import Title from "./components/Title/Title";
import UserStory from "./components/UserStory/UserStory";
import DATA from "./data";
import style from "./main";
import { useState } from "react";

const App = () => {
  const pageSize = 4;
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [renderedData, setRenderedData] = useState(DATA.slice(0, pageSize));

  const pagination = (data, pageNumber, pageSize) => {
    let startIndex = (pageNumber - 1) * pageSize;
    console.log(startIndex, renderedData.length);
    if (startIndex > data.length) {
      return [];
    }
    setPageNumber(pageNumber);
    return data.slice(startIndex, startIndex + pageSize);

  }

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
            keyExtractor={(item) => item.id.toString()}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (!isLoading) {
                setIsLoading(true);
                setRenderedData(prev => [...prev, ...pagination(DATA, pageNumber + 1, pageSize),
                ]);
                setIsLoading(false);
              }
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            data={renderedData}
            renderItem={({ item }) => <UserStory name={item.name} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
