import axios from 'axios';

export default function deleteToDo(id) {
  return async function deleteToDoThunk(dispatch) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const payload = {
      id,
    };
    dispatch({
      type: 'deleteToDo',
      payload,
    });
  };
}
