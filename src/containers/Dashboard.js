import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import ToDo from '../components/ToDo';
import NewToDo from '../components/NewToDo';
import getToDos from '../actions/getToDos';

export default function Dashboard() {
  const dispatch = useDispatch();

  const toDos = useSelector((state) => state.toDos);
  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    if (currentUser) {
      dispatch(getToDos(currentUser.id));
    }
  }, [currentUser]);

  return (
    <div>
      <Header />
      <section className="container">
        <NewToDo />
        {toDos && toDos.map((todo) => <ToDo key={todo.id} todo={todo} />)}
      </section>
    </div>
  );
}
