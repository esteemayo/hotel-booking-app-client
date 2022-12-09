import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

import useFetch from 'hooks/useFetch';
import { useGlobalSearchContext } from 'context/search/SearchContext';
import './reserve.scss';
import { updateRoomAvailaibility } from 'services/roomService';

const Reserve = ({ onClose, hotelId }) => {
  const { dates } = useGlobalSearchContext();
  const [selectedRooms, setSelectedRooms] = useState([]);

  const { data, loading, error } = useFetch(`http://localhost:8800/api/v1/hotels/room/${hotelId}`);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    let list = [];

    while (date <= end) {
      list.push(new Date(date))
      date.setDate(date.getTime() + 1);
    }

    return list;
  };

  const allDates = getDatesInRange(dates[0][0].startDate, dates[0][0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );

    return !isFound;
  };

  const handleSelect = (e) => {
    const { checked, value } = e.target;

    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const handleClick = async () => {
    try {
      await Promise.all(selectedRooms.map((roomId) => {
        const res = updateRoomAvailaibility(roomId, { dates: allDates });
        return res.data;
      }))
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='reserve'>
      <div className='reserve__container'>
        <FontAwesomeIcon
          icon={faCircleXmark}
          className='reserve__close'
          onClick={() => onClose(false)}
        />
        <span>Select your rooms:</span>
        {data?.lists?.map((item) => {
          const { _id: id, desc, title, price, maxPeople, roomNumbers } = item;
          return (
            <div key={id} className='reserve__item'>
              <div className='reserve__itemInfo'>
                <div className='reserve__title'>{title}</div>
                <div className='reserve__desc'>{desc}</div>
                <div className='reserve__max'>
                  Max people: <b>{maxPeople}</b>
                </div>
                <div className='reserve__price'>{price}</div>
              </div>
              <div className='reserve__selectRooms'>
                {roomNumbers.map((item) => {
                  const { _id: id, number } = item;
                  return (
                    <div key={id} className='reserve__room'>
                      <label>{number}</label>
                      <input
                        value={id}
                        type='checkbox'
                        onChange={handleSelect}
                        disabled={!isAvailable(item)}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <button onClick={handleClick} className='reserve__btn'>Reserve now!</button>
      </div>
    </div>
  );
};

export default Reserve;
