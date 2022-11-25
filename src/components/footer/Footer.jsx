import './footer.scss';

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <div className='footer'>
      <div className='footer__lists'>
        <ul className='footer__list'>
          <li className='footer__list--item'>Countries</li>
          <li className='footer__list--item'>Regions</li>
          <li className='footer__list--item'>Cities</li>
          <li className='footer__list--item'>Districts</li>
          <li className='footer__list--item'>Airports</li>
          <li className='footer__list--item'>Hotels</li>
        </ul>
        <ul className='footer__list'>
          <li className='footer__list--item'>Countries</li>
          <li className='footer__list--item'>Regions</li>
          <li className='footer__list--item'>Cities</li>
          <li className='footer__list--item'>Districts</li>
          <li className='footer__list--item'>Airports</li>
          <li className='footer__list--item'>Hotels</li>
        </ul>
        <ul className='footer__list'>
          <li className='footer__list--item'>Countries</li>
          <li className='footer__list--item'>Regions</li>
          <li className='footer__list--item'>Cities</li>
          <li className='footer__list--item'>Districts</li>
          <li className='footer__list--item'>Airports</li>
          <li className='footer__list--item'>Hotels</li>
        </ul>
        <ul className='footer__list'>
          <li className='footer__list--item'>Countries</li>
          <li className='footer__list--item'>Regions</li>
          <li className='footer__list--item'>Cities</li>
          <li className='footer__list--item'>Districts</li>
          <li className='footer__list--item'>Airports</li>
          <li className='footer__list--item'>Hotels</li>
        </ul>
        <ul className='footer__list'>
          <li className='footer__list--item'>Countries</li>
          <li className='footer__list--item'>Regions</li>
          <li className='footer__list--item'>Cities</li>
          <li className='footer__list--item'>Districts</li>
          <li className='footer__list--item'>Airports</li>
          <li className='footer__list--item'>Hotels</li>
        </ul>
      </div>
      <div className='footer__text'>Copyright © {currentYear} Bookingapp.</div>
    </div>
  );
};

export default Footer;
