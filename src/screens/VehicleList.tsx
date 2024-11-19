import React, { useState, useEffect } from 'react';
import { FlatList, Text } from 'react-native';

const VehicleList = () => {
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
    <FlatList
      data={vehicle}
      renderItem={({ item }) => (
        <Text>{item.marca}</Text>
        <Text>{item.modelo}</Text>
        <Text>{item.cor}</Text>
        <Text>{item.conector}</Text>
        <Button title="Deletar" onPress={() => handleDelete(item.id)} />
      )}
    />
  );
};