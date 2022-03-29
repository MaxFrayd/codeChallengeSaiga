import axios from 'axios';

export default function getToDos(userId) {
  return async function getToDosThunk(dispatch) {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
    const payload = {
      toDos: response.data,
    };

    dispatch({
      type: 'getToDos',
      payload,
    });
  };
}
