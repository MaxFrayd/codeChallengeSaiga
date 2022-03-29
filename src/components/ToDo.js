import React from 'react';
import { useDispatch } from 'react-redux';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import deleteToDo from '../actions/deleteToDo';
import updateToDo from '../actions/updateToDo';
import ToDoForm from '../forms/ToDoForm';

export default function ToDo({ todo }) {
  const dispatch = useDispatch();

  const handleDelete = (event) => {
    event.preventDefault();
    dispatch(deleteToDo(todo.id));
  };

  const toggleCompletion = () => {
    if (todo.completed) {
      dispatch(updateToDo({ ...todo, completed: false }));
    } else {
      dispatch(updateToDo({ ...todo, completed: true }));
    }
  };

  return (
    <div>
      <h3>{todo.title}</h3>
      <span>{todo.completed ? 'Completed' : 'In Progress'}</span>
      <Popup trigger={<button>Edit ToDo</button>} modal>
        {(close) => <ToDoForm todo={todo} closeModal={close} />}
      </Popup>
      <button onClick={toggleCompletion}>{todo.completed ? 'Uncomplete' : 'Complete'}</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
