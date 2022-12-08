import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { login } from 'services/authService';
import { useGlobalAuthContext } from 'context/auth/AuthContext';
import './login.scss';

const initialState = {
  username: '',
  password: '',
};

const Login = ({ inputs }) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState(initialState);
  const { error, loading, loginFailure, loginStart, loginSuccess } = useGlobalAuthContext();

  const handleChange = ({ target: input }) => {
    const { id, value } = input;
    setCredentials((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    loginStart();

    try {
      const { data } = await login({ ...credentials });
      loginSuccess(data);
      navigate('/');
    } catch (err) {
      loginFailure(err.response.data);
    }
  };

  return (
    <div className='login'>
      <div className='login__container'>
        {inputs.map((input) => {
          const { id, type, placeholder } = input;
          return (
            <input
              id={id}
              key={id}
              type={type}
              placeholder={placeholder}
              onChange={handleChange}
              className='login__input'
            />
          )
        })}
        <button
          type='submit'
          disabled={loading}
          onClick={handleSubmit}
          className='login__button'
        >
          Login
        </button>
        {error && <span className='login__error'>{error.message}</span>}
      </div>
    </div>
  );
};

export default Login;
