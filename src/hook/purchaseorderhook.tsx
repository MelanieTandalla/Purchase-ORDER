import  { useEffect, useState } from 'react'
import { deletePurchase } from '../api/PurchaseOrderBD'
import { Invoice } from '../interfaces/PurchaseOrerComponent'
import { getWithAuth } from '../shared/getWithAuth'
import { Alert } from 'react-native';

export const UsePurchaseOrder = () => {

  const [PurchaseOrders, setPurchaseOrders] = useState<Invoice[]>([])
 
  useEffect(() => { 
    
    const fetchPurchaseOrder =async () => {
      const {data} = await getWithAuth('PurchaseOrdere');
      setPurchaseOrders(data);
     
    }

    fetchPurchaseOrder()
  
  }, [])
  const handleDeletePurchaseOrder = async (id: string) => {

    Alert.alert(
      'DELETE PRODUCT',
      'Seguro quieres ELIMINAR este producto',
      [
          { text: 'Cancel'},
          {text: 'OK', onPress: () => deletePurchase(id)},
      ],
      {
          cancelable: true,
      }
  );
    };


   
  return {
    PurchaseOrders,
    handleDeletePurchaseOrder
  }
}