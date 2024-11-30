import React, { useState, useEffect } from 'react';
import { Button, FlatList, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const VehicleList: React.FC = ({ navigation }) => {
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    const fetchvehicle = async () => {
      const response = await fetch('http://localhost:8080/vehicle');
      const data = await response.json();
      setVehicle(data);
    };

    fetchvehicle();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await fetch(`http://localhost:8080/vehicle/${id}`, {
        method: 'DELETE',
      });
      setVehicle(vehicle.filter((vehicle) => vehicle.id !== id));
      alert('veiculo deletado com sucesso!');
    } catch (error) {
      console.error('Erro ao deletar veiculo:', error);
      alert('Erro ao deletar veiculo. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
      data={vehicle}
      renderItem={({ item }) => (
        <View>
         <Text>{item.marca}</Text>
         <Text>{item.modelo}</Text>
         <Text>{item.cor}</Text>
         <Text>{item.conector}</Text>
         <Button title="Deletar" onPress={() => handleDelete(item.id)} />
        </View>

      )}/>

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


const styles = StyleSheet.create({
  container:{
    flex: 1
  }
})

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

export default VehicleList