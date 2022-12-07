import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faCircleArrowLeft, faCircleArrowRight, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import useFetch from 'hooks/useFetch';
import Header from 'components/header/Header';
import MailList from 'components/mailList/MailList';
import './hotel.scss';

const Hotel = () => {
  const { pathname } = useLocation();
  const slug = pathname.split('/')[2];

  const [open, setOpen] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const { data, loading } = useFetch(`http://localhost:8800/api/v1/hotels/details/${slug}`);
  console.log(data);
  const handleOpen = (index) => {
    setSlideNumber(index);
    setOpen(true)
  };

  const handleClick = (direction) => {
    let newSlideNumber;

    if (direction === 'left') {
      newSlideNumber = slideNumber === 0 ? data?.hotel?.photos.length - 1 : slideNumber - 1;
    }

    if (direction === 'right') {
      newSlideNumber = slideNumber === data?.hotel?.photos.length - 1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  // const photos = [
  //   {
  //     src: 'https://t-cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1',
  //   },
  //   {
  //     src: 'https://t-cf.bstatic.com/xdata/images/hotel/square600/280950287.webp?k=b984c542b8b1a2ee0e019e4491da338a85b660caa10c5e1197225c5f3052d629&o=&s=1',
  //   },
  //   {
  //     src: 'https://t-cf.bstatic.com/xdata/images/hotel/square600/132452060.webp?k=8448bab55c87dbb42ab7c6643fbbce542124c908f63f6b36dc3cdc859e60cb0a&o=&s=1',
  //   },
  //   {
  //     src: 'https://t-cf.bstatic.com/xdata/images/hotel/square600/187855604.webp?k=bbb45aa5b540c7608ea3af52d92b95a215df9af831dd3ae0e4c4cce501e28b1b&o=&s=1',
  //   },
  //   {
  //     src: 'https://t-cf.bstatic.com/xdata/images/city/square250/822312.webp?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&o=',
  //   },
  //   {
  //     src: 'https://t-cf.bstatic.com/xdata/images/city/square250/684500.webp?k=df54bcea224564a0a00497a2076d5338316a0b56692498eddb3c02c9a6cdde64&o=',
  //   },
  // ];


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
                onClick={() => handleClick('left')}
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
                onClick={() => handleClick('right')}
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
                  <h1>Perfect for a 9-night stay!</h1>
                  <span>
                    Located in the real heart of Krakow, this property has an
                    excellent location score of 4.9!
                  </span>
                  <h2>
                    <b>$945</b> (9 nights)
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
