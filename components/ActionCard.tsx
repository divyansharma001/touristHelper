import {StyleSheet, Text, View, Linking, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import ElevatedCard from './ElevatedCard';

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}> Best place to visit in Summers</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
           Manali, Himachal Pradesh
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1497267049703-01d7eb538c99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFuYWxpJTJDJTIwaGltYWNoYWwlMjBwcmFkZXNofGVufDB8fDB8fHww',
          }}
          style={styles.cardImage}
        />
        <View>
          <Text numberOfLines={3} style={styles.bodyContainer}>
            Known for its cool climate, beautiful landscapes, and adventure
            activities like paragliding, rafting, and trekking.
          </Text>
        </View>
        <View style={styles.bodyFooter}>
          <TouchableOpacity onPress={()=>openWebsite('https://himachaltourism.gov.in/destination/manali/')}>
            <Text style={styles.footerText}>Know more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
        fontWeight:'semibold',
        paddingHorizontal:15,
        paddingVertical:5,
  },
  card: {
    width: 377,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16

  },
  elevatedCard: {
    backgroundColor: '#EEEDEB',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4
  },
  headerText: {
    color: '#0C1844',
    fontSize: 20,
    fontWeight: '600'
  },

  headingContainer: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  cardImage: {
    height: 190
  },
  bodyContainer: {
    fontSize: 18,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bodyFooter:{
        fontSize: 20,
        color: '#000000',
        backgroundColor: '#DC5F00',
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 6,
        flex:1,
        alignContent: 'center',
        justifyContent: 'center',
       
  },
  footerText:{
    fontSize: 20,
    
  }
});
