import { BackHandler, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>Tourism Helper</Text>
      <Text style={styles.subHeading}>Select a city</Text>
      <ScrollView horizontal={true}>
      <View style={styles.container }>
        <View style={[styles.card, styles.cardOne]}>
            <Text>Banglore</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>Mumbai</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>Chennai</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
            <Text>Kolkata</Text>
        </View>
      </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal: 12,
        paddingVertical:8,
        color: 'black'
    },
    subHeading:{
        fontWeight:'semibold',
        paddingHorizontal: 15,
        paddingVertical:8,
    },
    container: {
     flex:1,
     flexDirection: 'row',
     padding: 5, 
    
    },
    card:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 120,
        borderRadius: 4,
        margin: 8,
        color: "white",

    },
    cardOne:{
        backgroundColor: '#EF5354'
    },
    cardTwo:{
        backgroundColor: '#004B8D'
    },
    cardThree:{
        backgroundColor: '#F9CD05'
    },
    cardFour:{
        backgroundColor: '#49004B'
    },
})