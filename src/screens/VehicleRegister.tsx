import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { useForm } from 'react-hook-form';


interface Vehicle {
  marca: string;
  modelo: string;
  cor: string;
  conector: string;
}





const VehicleRegister: React.FC = () => {

  const handleSubmit = async (data: Vehicle) => {
    try {
      await fetch(`http://localhost:8080/vehicle`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error('Erro ao criar veiculo:', error);
      alert('Erro ao criar veiculo. Tente novamente.');
    }
  };

  const { register, formState: { errors } } = useForm();


  const [vehicle, setVehicle] = useState<Vehicle>({
    marca: '',
    modelo: '',
    cor: '',
    conector: ''
  });  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Veiculo</Text>

      <TextInput
        {...register('modelo', { required: 'Campo obrigatório' })}
        style={styles.input}
        placeholder="Modelo"
        value={vehicle.modelo}
        onChangeText={(modelo) => setVehicle({ ...vehicle, modelo })}
      />

      <TextInput
        {...register('marca', { required: 'Campo obrigatório' })}
        style={styles.input}
        placeholder="Marca"
        value={vehicle.marca}
        onChangeText={(marca) => setVehicle({ ...vehicle, marca })}
      />

      <TextInput
        {...register('cor', { required: 'Campo obrigatório' })}
        style={styles.input}
        placeholder="Cor"
        value={vehicle.cor}
        onChangeText={(cor) => setVehicle({ ...vehicle, cor })}
      />

      <TextInput
        {...register('conector', { required: 'Campo obrigatório' })}
        style={styles.input}
        placeholder="Conector"
        value={vehicle.conector}
        onChangeText={(conector) => setVehicle({ ...vehicle, conector })}
      />

      <Button title='Criar' onPress={handleSubmit(vehicle)}/>

    </View>  

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    fontSize: 16
  }
});

export default VehicleRegister;