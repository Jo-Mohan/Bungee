import React from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'


const Posts = (props) => {
  const { dt_txt, pic } = props
  const { item, food_txt, caption, header, interactions } = styles
  return (
    <View style={item}>
        <Text style={header}>
           PFP   Bro
      </Text>
      <ImageBackground
        source={require('/Users/jomoh/ColorTest/src/pics/IMG_3121.jpg')}
        style={styles.image}
      />
     <View style = {interactions}>
      <Feather
              style = {interactions}
              name={'heart'}
              size={20}
              color={'black'}
            />
      <Feather
              style = {interactions}
              name={'message-circle'}
              size={20}
              color={'black'}
            />
      <Feather
              style = {interactions}
              name={'send'}
              size={20}
              color={'black'}
            />
      </View>
       <Text style={caption}>
        Challenge: Climb onto a building
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: '#bde2fc',
    borderRadius: 10,
    height: 375,
  },
  image: {
    flex:1,
    alignSelf: 'stretch',
    height: 290,

},

caption: {
    color: 'black',
    fontFamily: 'AmericanTypewriter',
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5
},
header: {
    color: 'black',
    fontFamily: 'AmericanTypewriter',
    fontSize: 20,
    textAlign: 'left',
    paddingLeft: 20
},
interactions: {
  flexDirection: 'row',
  paddingLeft: 5,
  paddingRight: 5,
}
})

export default Posts