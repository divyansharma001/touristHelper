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
      <ScrollView style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Tap</Text>
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
        paddingHorizontal:8,
        paddingVertical:8,
    },
    container: {
        padding:8,
    },
    card:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:100,
        height:100,
    },
    cardElevated:{
        backgroundColor: "#CAD5E2"
    },
})