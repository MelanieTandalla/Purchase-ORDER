import React from 'react'
import {  View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import ListPurchase from '../components/ListPurchase';

interface Props extends NativeStackScreenProps<any, any>{
}


export const ListPurchaseScreen = () => {

  
  return (
    <View>
      <ListPurchase></ListPurchase>
    </View>
      
    
  )
}

