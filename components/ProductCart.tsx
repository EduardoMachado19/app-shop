import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface ProductCartProps {
  name: string;
  photo: string;
  price: number;
  quantity: number;
}

const ProductCart: React.FC<ProductCartProps> = ({ name, photo, price, quantity }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: photo }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.price}>${price} x {quantity}</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
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

export default ProductCart;
