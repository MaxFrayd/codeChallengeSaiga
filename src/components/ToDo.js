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
    <div className="mt-2 p-2 bg-light w-100 border rounded-2 d-flex align-items-center justify-content-between">
      <h5 className="w-50">{todo.title}</h5>
      <span className="w-25">{todo.completed ? 'Completed' : 'In Progress'}</span>
      <div className="w-25 d-flex align-items-center justify-content-between">
        <Popup trigger={<button className="btn btn-primary ms-1">Edit ToDo</button>} modal>
          {(close) => <ToDoForm todo={todo} closeModal={close} />}
        </Popup>
        <button className="btn btn-success ms-1" onClick={toggleCompletion}>
          {todo.completed ? 'Uncomplete' : 'Complete'}
        </button>
        <button className="btn btn-danger ms-1" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
