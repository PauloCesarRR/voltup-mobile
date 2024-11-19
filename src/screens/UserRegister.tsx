import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native';
import RegisterService from '../services/RegisterService';

interface Usuario {
  nome: string;
  email: string;
  senha: string;
}

const Register: React.FC = ({ navigation }) => {
  const [usuario, setUsuario] = useState<Usuario>({
    nome: '',
    email: '',
    senha: '',
  });

  const handleSubmit = () => {
    RegisterService(usuario.nome, usuario.email, usuario.senha)
    navigation.navigate('Dashboard')
  };

  return (
    <View style={styles.container}>


      <View style={styles.subcontainer}>
        <Image source={require('../../assets/icon.png')} style={styles.logo}/>
        <Text style={styles.title}>FarmSight</Text>
      </View>

      <View style={styles.subcontainer}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={usuario.nome}
          onChangeText={(nome) => setUsuario({ ...usuario, nome })}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          value={usuario.email}
          keyboardType='email-address'
          onChangeText={(email) => setUsuario({ ...usuario, email })}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={usuario.senha}
          secureTextEntry={true}
          onChangeText={(senha) => setUsuario({ ...usuario, senha })}
        />
      </View>

      <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText} >Cadastrar</Text>  
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text}>Já tem uma conta? <Text style={styles.linkText}>Faça Login</Text> </Text> 
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#374151',
    gap:32
  },

  subcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap:8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  input: {
    width: 300,
    height: 40,
    borderColor: '#fff',
    color: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  button: {
    height: 40,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#10B981',
    borderColor: '#fff',
    color: '#fff',
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },

  text: {
    color: '#fff'
  },
  linkText: {
    color:'#10B981'
  },
  logo: {
    width: 64,
    height: 64,
  }
});

export default Register;


