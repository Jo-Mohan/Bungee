import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  FlatList,
  StatusBar
} from 'react-native'
import Posts from './Posts'

const DATA1 = [
  {
    dt_txt: 'Jo: Twerk on Grainger Library',
    pic: 'food'
  },
  {
    dt_txt: 'Hrishi: Same as Jo',
    pic: 'food-croissant'
  },
  {
    dt_txt: 'Shayan: Try to not be a monkey',
    pic: 'food-hot-dog'
  },
  {
    dt_txt: 'Sachit: Don\'t date a minor',
    pic: 'food-steak'
  },
  {
    dt_txt: 'Raghu: Don\'t talk to Julliette for a day',
    pic: 'food-takeout-box'
  },
  {
    dt_txt: 'Samy: Be happy at Purdue',
    pic: 'food-turkey'
  },
  {
    dt_txt: 'Adi: Go to the nude beach in SD',
    pic: 'food-variant'
  }
]

const Home = () => {
  const { container, image } = styles
  const renderItem1 = ({ item }) => (
    <Posts
      pic={item.pic}
      dt_txt={item.dt_txt}
    />
  )

  return (
    <SafeAreaView style={container}>
        <FlatList
          data={DATA1}
          renderItem={renderItem1}
          keyExtractor={(item) => item.dt_txt}
        />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#ffffff'
  },
  image: {
    flex: 1
  },
  topTxt: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 25
  }
})
export default Home