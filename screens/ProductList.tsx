import React, { useState, useEffect, useContext } from 'react';
import { View, TextInput, FlatList, StyleSheet, Button } from 'react-native';
import Product from '../components/Product';
import { CartContext } from '../context/CartContext';
import { useNavigation } from '@react-navigation/native';

interface ProductData {
  id: string;
  name: string;
  photo: string;
  price: number;
}

const ProductList: React.FC = () => {
  const context = useContext(CartContext);
  const navigation = useNavigation(); // Hook para navegação
  const [products, setProducts] = useState<ProductData[]>([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data: ProductData[] = [
        { id: '1', name: 'Iphone 12 128GB', photo: 'https://microimport.com.br/wp-content/uploads/iphone-12-de-128-gb.webp', price: 100 },
        { id: '2', name: 'Iphone 13 128GB', photo: 'https://mobileview.pt/wp-content/uploads/2021/11/iphone-13-midnight-select-2021.png', price: 150 },
        { id: '3', name: 'Iphone 15 128GB', photo: 'https://meuimportadors.com/wp-content/uploads/2023/10/iPhone-15-Verde.png', price: 200 },
      ];
      setProducts(data);
    };
    fetchData();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar produtos"
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput}
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Product name={item.name} photo={item.photo} price={item.price} />
        )}
      />
      <Button title="Ir para o Carrinho" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default ProductList;
