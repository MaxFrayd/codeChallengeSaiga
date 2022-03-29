import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ToDoForm from '../forms/ToDoForm';

export default function NewToDo() {
  return (
    <div className="w-100">
      <Popup
        trigger={
          <button className="mt-2 p-2 w-100 border rounded-2 d-flex align-items-center justify-content-center fs-4">
            +
          </button>
        }
        nested
        modal
      >
        {(close) => <ToDoForm closeModal={close} />}
      </Popup>
    </div>
  );
}
