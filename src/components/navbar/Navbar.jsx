import './navbar.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__container'>
        <span className='navbar__logo'>Bookingapp</span>
        <div className='navbar__items'>
          <button className='navbar__items--button'>Register</button>
          <button className='navbar__items--button'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
