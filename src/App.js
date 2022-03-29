import { Route, Routes, useNavigate } from 'react-router-dom';
import { React, useEffect } from 'react';
import LoginForm from './forms/LoginForm';
import Dashboard from './containers/Dashboard';
import { useSelector } from 'react-redux';
import setCurrentUser from './localStorage/setCurrentUser';

function App() {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.currentUser);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    } else {
      setCurrentUser(currentUser);
      navigate('/dashboard');
    }
  }, [currentUser]);

  return (
    <Routes>
      <Route exact path="/login" element={<LoginForm />}></Route>
      <Route exact path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  );
}

export default App;
