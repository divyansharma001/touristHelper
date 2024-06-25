import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Taj Mahal</Text>
        <Text style={styles.cardLabel}>Agra, Uttar Pradesh</Text>
        <Text style={styles.cardDescription}>
          The Taj Mahal is an ivory-white marble mausoleum on the right bank of
          the river Yamuna in Agra, Uttar Pradesh, India.
        </Text>
        <Text style={styles.cardFooter}> 
            18 mins away     
        </Text>
      </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: 'semibold',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  card:{
   marginHorizontal: 15,
   margin: 8,
   marginBottom: 15,
  },
  cardImage: {
    height: 380,
    width: 380,
    marginBottom: 5,
    borderTopLeftRadius:10,
    borderTopRightRadius: 10,
  },
  cardElevated:{
  backgroundColor: 'white',
  elevation: 5,
  shadowOffset:{
    width:1,
    height:1,
  }
  },
  cardBody: {
    flex:1,
    flexGrow: 1,
    margin: 10,
  },
  cardTitle: {
    color: 'black',
    fontSize: 20,
  },
  cardLabel: {
    fontSize: 15,
    marginTop:6,
    marginBottom: 6,
  },
  cardDescription: {
    fontSize: 18,
  },
  cardFooter: {
    marginTop: 20,
    fontSize: 15,
    color: 'black'
  }
});
