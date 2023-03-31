import React from 'react';

import { ListPurchaseScreen } from '../screens/Homepurchase';
import { UpdatePruchaseScreen } from '../screens/UpdatePurchaseScreen';
import { NewpurchaseScreen } from '../screens/NewpurchaseScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ListPurchaseScreen" component={ListPurchaseScreen} />
        <Stack.Screen name="NewpurchaseScreen" component={NewpurchaseScreen} />
        <Stack.Screen name="UpdatePruchaseScreen" component={UpdatePruchaseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}