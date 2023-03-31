import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Supplier } from '../interfaces/PurchaseOrerComponent';

interface Props {
    documentNumber:string;
    date: string;
    supplier?: Supplier;
    product?:  Supplier;
    quantity?: number;
    price?: number;

}

export const Header = ({documentNumber, date}: Props) => {

  return (
    <View style={styles.globalMargin}>
          <Text style={styles.title}>{documentNumber}</Text>
          <Text style={styles.title}>{date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    globalMargin: {
      marginHorizontal: 20,
      marginBottom: 15,
      flexDirection: 'row',
     },
  
    title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
   },
  });