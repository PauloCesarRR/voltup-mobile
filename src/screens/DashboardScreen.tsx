import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Stations {
  id: number;
  endereco: string;
  tipoConector: string;
  nome: string;
}

const Dashboard: React.FC = ({navigation}) => {
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
      <View style={styles.container2}>
        <Text style={styles.title}>Dashboard</Text>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={footerStyles.container}>
          <TouchableOpacity onPress={() => navigation.navigate('VehicleRegister')}>
            <Image source={require('../../assets/icons/vehicle_register.png')} style={footerStyles.logo}/>
          </TouchableOpacity>            
          <TouchableOpacity onPress={() => navigation.navigate('VehicleList')}>
            <Image source={require('../../assets/icons/vehicles.png')} style={footerStyles.logo}/>
          </TouchableOpacity>          
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Image source={require('../../assets/icons/Space dashboard.png')} style={footerStyles.logo}/>

          </TouchableOpacity>
        </View>
    </View>
  );
};


const footerStyles = StyleSheet.create({
  container: {
    alignSelf: 'baseline',
    width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#047857',
      gap:8,
      padding: 16
    },
  
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff'
    },
    logo: {
      width: 32,
      height: 32,
    }
})

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  container2: {
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
