import axios from 'axios';

const RegisterService = async (username: string, email: string, password: string) => {
  try {
    const response = await axios.post('/auth/register', {
      username: username,
      email: email,
      password: password
    });

    console.log('Cadastro bem-sucedido:', response.data);
    return response.data;
  } catch (error) {

    console.error('Erro no Cadastro:', error.response ? error.response.data : error.message);
    throw error; 
  }
};

export default RegisterService;