import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import  Icon  from "react-native-vector-icons/Ionicons";
import { usePurchase } from "../hook/usepurchase";
import ContainerBars from "./ContainerBars";
import { Header } from "./Headertittle";
import { AuthorityStyles } from "../themes/pruchaserdertheme";

const ListPurchase = () => {

    const { navigation, purchase,  handleDeletePurchase } = usePurchase();

    const [searchTerm, setSearchTerm] = useState('');
  
    const filteredAuthority = purchase.filter(purchase =>
      purchase.documentNumber.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const render = ({ item }: any) => (
        <View style={styles.list}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('UpdatePruchaseScreen', { purchase: item })}
          >
            <Icon
              name="create-outline"
              color="#1E90FF"
              size={23}
            />
          </TouchableOpacity>
    
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => handleDeletePurchase(item.id)}
          >
            <Icon
              name="trash-outline"
              color="#1E90FF"
              size={23}
            />
          </TouchableOpacity>
          <Text style={styles.text}>{item.documentNumber}</Text>
          <Text style={styles.text}>{item.date}</Text>
        </View>
      );
  return (
    <ScrollView>
    <View>
      <ContainerBars/>
    <View style={styles.marginList}>
    <View style={styles.searchContainer}>
    <TouchableOpacity
        onPress={() => navigation.navigate('NewAuthorityScreen')}
       >
        <View style={AuthorityStyles.fab}>
          <Text style={AuthorityStyles.fabText}>New Authority</Text>
        </View>
       </TouchableOpacity>
      <Icon
        name="search"
        color="#1E90FF"
        size={25}
        style={{flexDirection:'column' , alignSelf: 'center', padding:10}}
      />
      <TextInput
        style={styles.searchInput}
        placeholder="Search authority"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
    </View>
        <FlatList
          data={filteredAuthority}
          keyExtractor={(item) => item.id.toString()}
          renderItem={render}
          ListHeaderComponent={() => <Header documentNumber="documentNumber" date="date"/>}
          scrollEnabled={false}
        />
  </View>
  </View>
  </ScrollView>
  )
}

const styles = StyleSheet.create({
    marginList:{
      marginHorizontal: 20,
      marginTop: 110,
    },
    list: {
     flexDirection: 'row',
    },
  
    text: {
      flex: 1,
      fontSize: 20,
    },
  
    new: {
      backgroundColor: '#1E90FF',
      padding: 8,
      alignItems: 'center',
    },
  
    newText: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 25,
    },
  
    searchContainer: {
      padding: 8,
      flexDirection: 'row',
    },
  
    searchInput: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      borderRadius: 10,
      padding: 10,
      fontSize: 18,
    },
  });

export default ListPurchase;