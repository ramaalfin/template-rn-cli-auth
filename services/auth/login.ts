import axios from 'axios';
import Config from 'react-native-config';

export const loginUser = async (username: string, password: string) => {
  const data = {
    username: username,
    password: password,
    id_jns_mobile: 4,
  };

  return await axios.post(`${Config.API_URL}/auth/login`, data);
};
