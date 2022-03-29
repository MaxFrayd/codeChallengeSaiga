import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import login from '../actions/login';

export default function LoginForm() {
  const dispatch = useDispatch();

  const errors = useSelector((state) => state.errors);
  const [formState, setFormState] = useState({ email: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(formState.email));
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <div className="d-flex flex-column justify-content-center align-items-center vh-100">
        <p>Login into your account</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="emailAddress" className="form-label">
              Email address
            </label>
            <input
              required
              type="email"
              className="form-control"
              id="emailAddress"
              aria-describedby="emailHelp"
              value={formState.email}
              onChange={(event) => setFormState({ ...formState, email: event.target.value })}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              required
              type="password"
              className="form-control"
              id="password"
              value={formState.password}
              onChange={(event) => setFormState({ ...formState, password: event.target.value })}
            />
          </div>
          <div>
            <p className="text-danger">{errors.login ? 'Wrong email or password.' : ''}</p>
          </div>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
