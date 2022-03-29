import axios from 'axios';

export default function updateToDo(newToDo) {
  return async function updateToDoThunk(dispatch) {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/todos/${newToDo.id}`,
      newToDo,
    );
    const payload = {
      newToDo: response.data,
    };
    dispatch({
      type: 'updateToDo',
      payload,
    });
  };
}
