import React from "react";
import {
  SafeAreaView,
  View,
 StyleSheet,
  ScrollView,
} from 'react-native';
import FlatCard from "./components/FlatCard";
import ElevatedCard from "./components/ElevatedCard";
import FancyCard from "./components/FancyCard";
import ActionCard from "./components/ActionCard";
import ContactList from "./components/ContactList";

function App(): JSX.Element{
  return(
     <SafeAreaView>
      <ScrollView>
      <View>
        <FlatCard/>
        <ElevatedCard/>
        <FancyCard/>
        <ContactList/>
        <ActionCard/>
      </View>
      </ScrollView> 
     </SafeAreaView>

  )
}

export default App;


const styles = StyleSheet.create({

})