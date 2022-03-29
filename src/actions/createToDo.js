import axios from 'axios';

export default function createToDo(newToDo) {
  return async function createToDoThunk(dispatch) {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', newToDo);
    const payload = {
      newToDo: response.data,
    };
    dispatch({
      type: 'createToDo',
      payload,
    });
  };
}
