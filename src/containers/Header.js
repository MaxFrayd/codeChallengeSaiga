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
    <div className="d-flex p-3 border-bottom border-light align-items-center justify-content-end bg-light">
      {currentUser ? (
        <>
          <span className="fs-5 fw-bold me-3">{currentUser.name}</span>
          <button className="btn btn-dark" onClick={handleLogout}>
            Logout
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
