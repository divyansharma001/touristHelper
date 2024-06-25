import { 
    View, 
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native'
import React from 'react'

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Must Visit</Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Taj Mahal, Agra</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Jaipur, Rajasthan</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Varanasi, Uttar Pradesh</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
            <Text>Goa</Text>
        </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default ElevatedCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight:'semibold',
        paddingHorizontal:15,
        paddingVertical:5,
    },
    container: {
        padding:8,
        flex: 1,
        flexDirection: 'row',
    },
    card:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:125,
        height:120,
        margin: 8,
        borderRadius: 5
    },
    cardOne:{
        backgroundColor: "#CAD5E2"
    },
    cardTwo:{
      backgroundColor: "#ff94ab"
  },
  cardThree:{
    backgroundColor: "#ff7732"
},
cardFour:{
  backgroundColor: "#FFF0C9"
},
})