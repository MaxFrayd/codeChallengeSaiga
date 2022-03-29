import { useDispatch } from 'react-redux';
import { useState } from 'react';
import login from '../actions/login';

export default function LoginForm() {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(formState.email));
  };
  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="d-flex  flex-column justify-content-center vh-100  align-items-center">
        <p>Login into your account</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              required
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={formState.email}
              onChange={(event) => setFormState({ ...formState, email: event.target.value })}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              required
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={formState.password}
              onChange={(event) => setFormState({ ...formState, password: event.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
