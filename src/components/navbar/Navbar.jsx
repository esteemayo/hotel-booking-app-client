import { Link } from 'react-router-dom';

import { useGlobalAuthContext } from 'context/auth/AuthContext';
import './navbar.scss';

const Navbar = () => {
  const { user } = useGlobalAuthContext();

  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <span className='navbar__logo'>
          <Link to='/'>Bookingapp</Link>
        </span>
        <div className='navbar__items'>
          {user ? (
            <>
              <span>{user?.username}</span>
              <button className='navbar__items--button'>Logout</button>
            </>
          ) : (
            <>
              <Link to='/register'>
                <button className='navbar__items--button'>Register</button>
              </Link>
              <Link to='/login'>
                <button className='navbar__items--button'>Login</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
