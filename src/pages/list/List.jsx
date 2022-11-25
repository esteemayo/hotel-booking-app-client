import { useState } from 'react';
import { format } from 'date-fns';
import { useLocation } from 'react-router-dom';

import Header from 'components/header/Header';
import './list.scss';

const List = () => {
  const { state } = useLocation();
  const [date, setDate] = useState(state.date);
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
              <input type='text' id='destination' />
            </div>
            <div className='list__search--item'>
              <label htmlFor='date'>Check-in-date</label>
              <input type='text' id='date' />
            </div>
          </div>
          <div className='list__result'></div>
        </div>
      </div>
    </div>
  );
};

export default List;
