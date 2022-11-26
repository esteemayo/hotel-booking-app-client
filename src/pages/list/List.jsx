import { useState } from 'react';
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import { useLocation } from 'react-router-dom';

import Header from 'components/header/Header';
import SearchItem from 'components/searchItem/SearchItem';
import './list.scss';

const List = () => {
  const { state } = useLocation();
  const [date, setDate] = useState(state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(state.options);
  const [destination, setDestination] = useState(state.destination);

  return (
    <div>
      <Header type='list' />
      <div className='list'>
        <div className='list__wrapper'>
          <div className='list__search'>
            <h1 className='list__search--title'>Search</h1>
            <div className='list__search--item'>
              <label htmlFor='destination'>Destination</label>
              <input type='text' id='destination' placeholder={destination} />
            </div>
            <div className='list__search--item'>
              <label>Check-in-date</label>
              <span onClick={() => setOpenDate(!openDate)} className='searchText'>
                {`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}
              </span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className='list__search--item'>
              <label>Options</label>
              <div className='option'>
                <div className='option__item'>
                  <span className='option__text'>
                    Min price <small>per night</small>
                  </span>
                  <input type='number' className='option__input' />
                </div>
                <div className='option__item'>
                  <span className='option__text'>
                    Max price <small>per night</small>
                  </span>
                  <input type='number' className='option__input' />
                </div>
                <div className='option__item'>
                  <span className='option__text'>Adult</span>
                  <input
                    type='number'
                    min={1}
                    className='option__input'
                    placeholder={options.adults}
                  />
                </div>
                <div className='option__item'>
                  <span className='option__text'>Children</span>
                  <input
                    type='number'
                    min={0}
                    className='option__input'
                    placeholder={options.children}
                  />
                </div>
                <div className='option__item'>
                  <span className='option__text'>Room</span>
                  <input
                    type='number'
                    min={1}
                    className='option__input'
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button className='list__search--btn'>Search</button>
          </div>
          <div className='list__result'>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
