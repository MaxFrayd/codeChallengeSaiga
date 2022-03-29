import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ToDoForm from '../forms/ToDoForm';

export default function NewToDo() {
  return (
    <div>
      <Popup trigger={<button>New ToDo</button>} nested modal>
        {(close) => <ToDoForm closeModal={close} />}
      </Popup>
    </div>
  );
}
