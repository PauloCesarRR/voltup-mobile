import axios from 'axios';

const AuthService = async (username: string, password: string) => {
  try {
    const response = await axios.post('/auth/login', {
      username: username,
      password: password
    });

    console.log('Login bem-sucedido:', response.data);
    return response.data;
  } catch (error) {

    console.error('Erro no login:', error.response ? error.response.data : error.message);
    throw error; 
  }
};

export default AuthService;