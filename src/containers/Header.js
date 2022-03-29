import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logout from '../actions/logout';

export default function Header() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.currentUser);

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(logout());
  };

  return (
    <div>
      {currentUser ? (
        <>
          <span>{currentUser.name}</span>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
