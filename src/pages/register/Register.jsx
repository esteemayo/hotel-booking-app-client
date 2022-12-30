import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { RESET } from 'context/auth/AuthTypes';
import { register } from 'services/userService';
import { uploadImage } from 'services/imageService';
import { useGlobalAuthContext } from 'context/auth/AuthContext';
import './register.scss';

const Register = ({ inputs }) => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [credentials, setCredentials] = useState(null);
  const { user, error, success, loading, dispatch, loginFailure, loginStart, loginSuccess }
    = useGlobalAuthContext();

  const handleChange = ({ target: input }) => {
    const { id, value } = input;
    setCredentials((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleRegister();
  };

  const handleRegister = async () => {
    loginStart();
    try {
      const { data } = await register({ ...credentials });
      loginSuccess({ ...data.details });
    } catch (err) {
      loginFailure(err.response.data);
    }
  };

  useEffect(() => {
    user && success && navigate('/');
    return () => dispatch({ type: RESET });
  }, [user, success, dispatch, navigate]);

  return (
    <div className='register'>
      <div className='register__container'>
        {inputs.map((input) => {
          const { id, type, placeholder } = input;
          return (
            <input
              id={id}
              key={id}
              type={type}
              onChange={handleChange}
              placeholder={placeholder}
              className='register__input'
            />
          );
        })}
        <button
          type='submit'
          disabled={loading}
          onClick={handleSubmit}
          className='register__button'
        >
          Register
        </button>
        {error && <span className='register__error'>{error.message}</span>}
      </div>
    </div>
  );
};

export default Register;
