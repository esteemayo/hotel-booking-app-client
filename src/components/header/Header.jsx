import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import './header.scss';

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  return (
    <div className='header'>
      <div className='header__container'>
        <div className='header__list'>
          <div className='header__list--item active'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className='header__list--item'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>
          </div>
          <div className='header__list--item'>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className='header__list--item'>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className='header__list--item'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className='header__title'>A lifetime of discounts? It's Genius.</h1>
        <p className='header__desc'>Get rewarded for your travels - unlock instant savings of 10% or more
          with a free Bookingapp account
        </p>
        <button className='header__btn'>Sign in / Register</button>
        <div className='header__search'>
          <div className='header__searchItem'>
            <FontAwesomeIcon icon={faBed} className='header__icon' />
            <input
              type='text'
              placeholder='Where are you going?'
              className='header__searchInput'
            />
          </div>
          <div className='header__searchItem'>
            <FontAwesomeIcon icon={faCalendar} className='header__searchItem--icon' />
            <span onClick={() => setOpenDate(!openDate)} className='header__searchText'>{`${format(
              date[0].startDate, 'MM/dd/yyyy')} to 
              ${format(date[0].endDate, 'MM/dd/yyyy')}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className='date'
              />
            )}
          </div>
          <div className='header__searchItem'>
            <FontAwesomeIcon icon={faPerson} className='header__searchItem--icon' />
            <span className='header__searchText'>2 adults 2 children 1 room</span>
          </div>
          <div className='header__searchItem'>
            <button className='header__btn'>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
