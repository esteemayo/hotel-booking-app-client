import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faCircleArrowLeft, faCircleArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import useFetch from 'hooks/useFetch';
import Header from 'components/header/Header';
import MailList from 'components/mailList/MailList';
import { useGlobalSearchContext } from 'context/search/SearchContext';
import './hotel.scss';

const Hotel = () => {
  const { pathname } = useLocation();
  const slug = pathname.split('/')[2];
  const { dates, options } = useGlobalSearchContext();

  const [open, setOpen] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const { data, loading } = useFetch(`http://localhost:8800/api/v1/hotels/details/${slug}`);

  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  };

  const days = dayDifference(dates[0][0].endDate, dates[0][0].startDate);

  const handleOpen = (index) => {
    setSlideNumber(index);
    setOpen(true)
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === 'left') {
      newSlideNumber = slideNumber === 0 ? data?.hotel?.photos.length - 1 : slideNumber - 1;
    }

    if (direction === 'right') {
      newSlideNumber = slideNumber === data?.hotel?.photos.length - 1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Header type='list' />
      {loading ? 'loading' : (
        <>
          {open && (
            <div className='slider'>
              <FontAwesomeIcon
                icon={faCircleXmark}
                className='close'
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className='arrow'
                onClick={() => handleMove('left')}
              />
              <div className='slider__wrapper'>
                <img
                  src={data?.hotel?.photos[slideNumber]}
                  alt=''
                  className='slider__img'
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className='arrow'
                onClick={() => handleMove('right')}
              />
            </div>
          )}
          <div className='hotel'>
            <div className='hotel__wrapper'>
              <button className='bookNow'>Reserve or Book Now!</button>
              <h1 className='hotel__title'>{data?.hotel?.name}</h1>
              <div className='hotel__address'>
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{data?.hotel?.address}</span>
              </div>
              <span className='hotel__distance'>
                Excellent location - {data?.hotel?.distance}m from center
              </span>
              <span className='hotel__priceHighlight'>
                Book a stay over ${data?.hotel?.cheapestPrice} at this property and get a free airport taxi
              </span>
              <div className='hotel__images'>
                {data?.hotel?.photos.map((item, index) => {
                  return (
                    <div key={index} className='hotel__imgWrapper'>
                      <img
                        src={item}
                        alt={data?.hotel?.name}
                        className='hotel__img'
                        onClick={() => handleOpen(index)}
                      />
                    </div>
                  );
                })}
              </div>
              <div className='hotel__details'>
                <div className='hotel__detailsTexts'>
                  <h1 className='hotel__detailsTexts--title'>{data?.hotel?.title}</h1>
                  <p className='hotel__detailsTexts--desc'>{data?.hotel?.desc}</p>
                </div>
                <div className='hotel__detailsPrice'>
                  <h1>Perfect for a {days}-night stay!</h1>
                  <span>
                    Located in the real heart of Krakow, this property has an
                    excellent location score of 4.9!
                  </span>
                  <h2>
                    <b>${days * data?.hotel?.cheapestPrice * options.room}</b> ({days} nights)
                  </h2>
                  <button>Reserve or Book Now!</button>
                </div>
              </div>
            </div>
            <MailList />
          </div>
        </>
      )}
    </div>
  );
};

export default Hotel;
