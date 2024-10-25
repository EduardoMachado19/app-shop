import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartProvider } from './context/CartContext';
import ProductList from './screens/ProductList';
import Cart from './screens/Cart';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ProductList">
          <Stack.Screen name="ProductList" component={ProductList} />
          <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}
