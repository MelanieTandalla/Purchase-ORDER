import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { Invoice } from "../interfaces/PurchaseOrerComponent";
import { deletePurchase, getPurchase } from "../api/PurchaseOrderBD";
import { useNavigation } from '@react-navigation/native';

export const usePurchase= () => {

    const [purchase, setAuthority] = useState<Invoice[]>([]);

    const navigation = useNavigation<any>();

    useEffect(() => {
    const fetchAuthority = async () => {
      const authority = await getPurchase();
      setAuthority(purchase);
      };
      fetchAuthority();
    }, []);

    const handleDeletePurchase = async (id: string) => {

      Alert.alert(
        'ELIMINAR AUTHORITY',
        'Seguro quieres ELIMINAR este Authority',
        [
            { text: 'Cancel'},
            {text: 'OK', onPress: () => deletePurchase(id)},
        ],
        {
            // Para cancelar pulsando cualquier parte de la pantalla
            cancelable: true,
        }
    );
      };

    return {
        navigation,
        purchase,
        handleDeletePurchase,
  };
};