import axios from 'axios';

export default function login(userEmail) {
  return async function loginThunk(dispatch) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const payload = {
      userEmail,
      allUsers: response.data,
    };

    dispatch({
      type: 'login',
      payload,
    });
  };
}
