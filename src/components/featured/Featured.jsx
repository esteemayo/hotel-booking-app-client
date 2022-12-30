import { useEffect, useState } from 'react';
import { getHotelCountByCity } from 'services/hotelService';

import './featured.scss';

const Featured = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await getHotelCountByCity();
        setList(data.list);
      } catch (err) {
        console.log(err);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <div className='featured'>
      {loading ? (
        'Loading please wait'
      ) : (
        <>
          <div className='featured__item'>
            <img
              className='featured__img'
              src='https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o='
              alt=''
            />
            <div className='featured__titles'>
              <h1>Madrid</h1>
              <h2>{list[0]} properties</h2>
            </div>
          </div>
          <div className='featured__item'>
            <img
              className='featured__img'
              src='https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o='
              alt=''
            />
            <div className='featured__titles'>
              <h1>Barcelona</h1>
              <h2>{list[1]} properties</h2>
            </div>
          </div>
          <div className='featured__item'>
            <img
              className='featured__img'
              src='https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o='
              alt=''
            />
            <div className='featured__titles'>
              <h1>London</h1>
              <h2>{list[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
