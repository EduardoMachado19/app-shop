import React, { useContext } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext';

interface ProductProps {
  name: string;
  photo: string;
  price: number;
}

const Product: React.FC<ProductProps> = ({ name, photo, price }) => {
  const context = useContext(CartContext);

  const handleAddToCart = () => {
    if (context) {
      context.addToCart({ name, photo, price, quantity: 1 });
    }
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: photo }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price}</Text>
      <Button title="Adicionar ao carrinho" onPress={handleAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
});

export default Product;
