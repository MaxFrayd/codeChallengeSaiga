import { useDispatch } from 'react-redux';
import { useState } from 'react';
import updateToDo from '../actions/updateToDo';
import createToDo from '../actions/createToDo';

export default function ToDoForm({ todo, closeModal }) {
  const [formState, setFormState] = useState({
    title: todo ? todo.title : '',
    completed: todo ? todo.completed : false,
  });
  const dispatch = useDispatch();
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
    <div className="d-flex align-items-center justify-content-center">
      <div className="d-flex  flex-column justify-content-center vh-100  align-items-center">
        <h3>{todo ? 'Edit' : 'Create'} ToDo</h3>
        <form onSubmit={handleSubmit}>
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
            <label htmlFor="toDoCompleted" className="form-label">
              Completed
            </label>
            <input
              type="checkbox"
              id="toDoCompleted"
              checked={formState.completed}
              onChange={(event) => setFormState({ ...formState, completed: event.target.checked })}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            {todo ? 'Save' : 'Create'}
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => closeModal()}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
