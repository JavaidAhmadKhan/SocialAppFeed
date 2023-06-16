import { FlatList, Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import Title from "./components/Title/Title";
import UserStory from "./components/UserStory/UserStory";
import DATA from "./data";
import style from "./main";
import { useState } from "react";
import UserPost from "./components/UserPost/UserPost";

const App = () => {
  const posts = [
    {
      id: 1,
      firstName: 'Javaid',
      lastName: "Khan",
      location: 'Srinagar Kashmir',
      likes: 1601,
      comments: 36,
      bookmarks: 89,

    },
    {
      id: 2,
      firstName: 'Sahil',
      lastName: "Khan",
      location: 'Srinagar Kashmir',
      likes: 1601,
      comments: 36,
      bookmarks: 89,

    },
    {
      id: 3,
      firstName: 'Suhail',
      lastName: "Khan",
      location: 'Srinagar Kashmir',
      likes: 1601,
      comments: 36,
      bookmarks: 89,

    },
    {
      id: 4,
      firstName: 'Aqib',
      lastName: "Khan",
      location: 'Srinagar Kashmir',
      likes: 1601,
      comments: 36,
      bookmarks: 89,

    },
    {
      id: 5,
      firstName: 'Hassan',
      lastName: "Khan",
      location: 'Srinagar Kashmir',
      likes: 1601,
      comments: 36,
      bookmarks: 89,

    },
    {
      id: 6,
      firstName: 'Iqra',
      lastName: "Khan",
      location: 'Srinagar Kashmir',
      likes: 1601,
      comments: 36,
      bookmarks: 89,

    },
  ];
  const pageSize = 4;
  const pageSizePosts = 2;
  const [pageNumber, setPageNumber] = useState(1);
  const [postPageNumber, setPostPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);
  const [renderedData, setRenderedData] = useState(DATA.slice(0, pageSize));
  const [renderedDataPosts, setRenderedDataPosts] = useState(posts.slice(0, pageSize));

  const pagination = (data, pageNumber, pageSize, posts = false) => {
    let startIndex = (pageNumber - 1) * pageSize;
    if (startIndex > data.length) {
      return [];
    }

    if (!posts) {
      setPageNumber(pageNumber);
    } else {
      setPostPageNumber(pageNumber)
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
            onMomentumScrollBegin={() => setIsLoading(false)}
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
        <View style={style.userPostContainer}>
          <FlatList
            onMomentumScrollBegin={() => setIsLoadingPosts(false)}
            keyExtractor={(item) => item.id.toString()}
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (!isLoading) {
                setIsLoadingPosts(true);
                setRenderedDataPosts(prev => [...prev, ...pagination(posts, DATA, pageNumber + 1, pageSize, true),
                ]);
                setIsLoadingPosts(false);
              }
            }}
            showsVerticalScrollIndicator={false}
            data={renderedDataPosts}
            renderItem={({ item }) => (
              <UserPost
                firstName={item.firstName}
                lastName={item.lastName}
                comments={item.comments}
                likes={item.likes}
                bookmarks={item.bookmarks}
                location={item.location}
              />

            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
