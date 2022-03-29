import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import logout from '../actions/logout';

export default function Header() {
  const currentUser = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
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
        <div></div>
      )}
    </div>
  );
}
