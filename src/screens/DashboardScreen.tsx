import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Stations {
  id: number;
  endereco: string;
  tipoConector: string;
  nome: string;
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<Stations[]>([]);

  useEffect(() => {

  }, []);

  const renderItem = ({ item }: { item: Stations }) => (
    <View style={styles.item}>
      <Text style={styles.itemValue}>{item.nome}</Text>
      <Text style={styles.itemValue}>{item.tipoConector}</Text>
      <Text style={styles.itemValue}>{item.endereco}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header/>

      <Text style={styles.title}>Dashboard</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Footer/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  itemValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Dashboard;
