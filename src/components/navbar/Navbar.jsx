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
              <button className='navbar__items--button'>Register</button>
              <button className='navbar__items--button'>Login</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
