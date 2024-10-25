import React, { useContext } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { CartContext } from '../context/CartContext';
import ProductCart from '../components/ProductCart';

const Cart: React.FC = () => {
  const context = useContext(CartContext);

  if (!context) {
    return null;
  }

  const { cartItems } = context;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ProductCart name={item.name} photo={item.photo} price={item.price} quantity={item.quantity} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Cart;
