import { useDispatch } from 'react-redux';
import { useState } from 'react';
import updateToDo from '../actions/updateToDo';
import createToDo from '../actions/createToDo';

export default function ToDoForm({ todo, closeModal }) {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({
    title: todo ? todo.title : '',
    completed: todo ? todo.completed : false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo) {
      dispatch(updateToDo({ ...todo, ...formState }));
    } else {
      dispatch(createToDo(formState));
    }

    closeModal();
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
      <h3>{todo ? 'Edit' : 'Create'} ToDo</h3>
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="toDoName" className="form-label">
            ToDo Name
          </label>
          <input
            required
            type="text"
            className="form-control"
            id="toDoName"
            aria-describedby="toDoNameHelp"
            value={formState.title}
            onChange={(event) => setFormState({ ...formState, title: event.target.value })}
          />
          <div id="toDoNameHelp" className="form-text">
            Please enter a name of your todo.
          </div>
        </div>
        <div className="mb-3">
          <input
            type="checkbox"
            id="toDoCompleted"
            checked={formState.completed}
            onChange={(event) => setFormState({ ...formState, completed: event.target.checked })}
          />
          <label htmlFor="toDoCompleted" className="form-label ms-2">
            Completed
          </label>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <button type="submit" className="btn btn-primary">
            {todo ? 'Save' : 'Create'}
          </button>
          <button type="button" className="btn btn-secondary ms-2" onClick={() => closeModal()}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
