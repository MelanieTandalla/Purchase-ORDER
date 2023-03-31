import React from 'react';
import { ListPurchaseScreen } from './src/screens/Homepurchase';
import { NewpurchaseScreen } from './src/screens/NewpurchaseScreen';
import { UpdatePruchaseScreen } from './src/screens/UpdatePurchaseScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown:false,
          }}
        >
     <Stack.Screen name="ListPurchaseScreen" component={ListPurchaseScreen} />
      <Stack.Screen name="NewpurchaseScreen" component={NewpurchaseScreen} />
      <Stack.Screen name="UpdatePruchaseScreen" component={UpdatePruchaseScreen} />
        </Stack.Navigator>
      </NavigationContainer>

    );
  }
  
  


