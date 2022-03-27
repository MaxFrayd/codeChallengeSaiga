import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { React, useEffect } from 'react';
import LoginForm from './forms/LoginForm';
import Dashboard from './Components/Dashboard';
import { Provider } from 'react-redux';

function App({ store }) {
  useEffect(() => {
    if (!store.currentUser) {
      useNavigate()('/login');
    }
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<LoginForm />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
