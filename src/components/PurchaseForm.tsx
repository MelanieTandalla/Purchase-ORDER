import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TouchableOpacity, TextInput } from "react-native-gesture-handler";
import  Icon  from "react-native-vector-icons/Ionicons";
import ContainerBars from "./ContainerBars";
import { useNavigation } from '@react-navigation/native';
import { createPurchase } from "../api/PurchaseOrderBD";
import { Invoice } from "../interfaces/PurchaseOrerComponent";
import { ListPurchaseScreen } from "../screens/Homepurchase";

const PurchaseForm = () => {
    const [documentNumber, setDocumentNumber] = useState('');
    const [date, setDate] = useState('');
    const navigation = useNavigation<any>();
  
    const handleCreateProduct = async () => {
      const response = await createPurchase(documentNumber, date);
      const newPurchase: Invoice = {
        id: response.id,
        documentNumber: response.documentNumber,
        date: response.date,
      };
      navigation.navigate('ListPurchaseScreen', {newPurchase});
    };
  
    return (
      <View>
        <ContainerBars/>
         <View style={styles.head}>
              <TouchableOpacity
                  onPress={() => navigation.navigate(ListPurchaseScreen) }
              ><Icon
                      color="white"
                      name="arrow-back-outline"
                      size={ 50 }
                />
              </TouchableOpacity>
         </View>
         <Text style={styles.title}>Formulario <Text>authority</Text> </Text>
         <Text style={styles.title}>New Product</Text>
        <View style={styles.container}>
          <Text style={styles.label}>Name:</Text>
          <TextInput
            style={styles.input}
            value={documentNumber}
            onChangeText={(text) => setDocumentNumber(text)}
          />
          <Text style={styles.label}>Endpoint:</Text>
          <TextInput
            style={styles.input}
            value={date}
            onChangeText={(text) => setDate(text)}
          />
          <View style={styles.botones}>
          <Button title="Guardar" onPress={handleCreateProduct} />
          <Button title="Cancelar"  onPress={() => navigation.navigate(ListPurchaseScreen) } />
          </View>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      padding: 25,
      marginTop: 30,
    },
    title: {
      textAlign: 'center',
      fontSize: 25,
      marginTop: 120,
      color: '#0185b9',
      fontWeight: 'bold',
    },
  
    head:{
      flexDirection: 'row',
    },
  
    label: {
      fontSize: 18,
      marginBottom: 8,
    },
    input: {
      height: 40,
      borderWidth: 1,
      borderColor: '#0185b9',
      borderRadius: 4,
      marginBottom: 16,
      paddingHorizontal: 8,
    },
    botones: {
      borderRadius:15,
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  
     textboton: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 18,
    },
  
    backButton:{
      marginTop: 0,
    },
  });
  
  export default PurchaseForm;