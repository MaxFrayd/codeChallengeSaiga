const toDos = (state = [], action) => {
  switch (action.type) {
    case 'toDos': {
      const { toDos } = action.payload;

      return toDos;
    }
    case 'createToDo': {
      const { newToDo } = action.payload;

      state.push(newToDo);

      return [...state];
    }

    case 'deleteToDo': {
      const { id } = action.payload;
      const indexToDelete = state.findIndex((todo) => todo.id === id);
      state.splice(indexToDelete, 1);

      return [...state];
    }
    case 'updateToDo': {
      const { newToDo } = action.payload;
      const indexToUpdate = state.findIndex((todo) => todo.id === newToDo.id);
      state[indexToUpdate] = newToDo;

      return [...state];
    }

    default:
      return state;
  }
};

export default toDos;
