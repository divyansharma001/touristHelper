import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'

export default function ContactList() {
    const details = [
        {
          uid: 1,
          name: "Rahul",
          about: "Makes things simple and interesting. Got good knowledge of History",
          imgURL: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          uid: 2,
          name: "Aisha",
          about: "Passionate about wildlife and nature. Great at spotting birds!",
          imgURL: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          uid: 3,
          name: "Vikram",
          about: "Foodie and local expert. Knows the hidden gems of street food!",
          imgURL: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          uid: 4,
          name: "Priya",
          about: "Expert in cultural experiences. Loves sharing stories and traditions",
          imgURL: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          uid: 5,
          name: "Anand",
          about: "Adventure enthusiast and trekking guide. Knows the best hiking trails!",
          imgURL: "https://images.unsplash.com/photo-1583341612074-ccea5cd64f6a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ];
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headingText}>Top Travel Guides</Text>
      <ScrollView 
      style={styles.container}
      scrollEnabled={false}>
        {details.map(({uid, name, about, imgURL })=> (
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri: imgURL,
                }}
                style= {styles.userImage}
                />
                <View style={styles.textContainer}>
                  <Text style={styles.userName}>{name}</Text>
                  <Text style={styles.userAbout}>{about}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 16,
    },
    headingText: {
        fontSize: 24,
        fontWeight: '600',
        paddingVertical: 5,
    },
    container: {
        marginBottom: 4,
    },
    userCard:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        padding: 8,
        backgroundColor: '#F2E3DB',
        borderRadius: 17
    },
    userImage:{
        height: 60,
        width: 60,
        borderRadius: 30,
        marginRight: 14,
    },
    textContainer: {
        flex: 1,
    },
    userName:{
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
        marginBottom: 4,
    },
    userAbout:{
        fontSize: 15,
        color: '#555',
    },
})
