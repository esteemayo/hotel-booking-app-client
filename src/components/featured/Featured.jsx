import useFetch from 'hooks/useFetch';
import './featured.scss';

const Featured = () => {
  const { data, loading, error } = useFetch('http://localhost:8800/api/v1/hotels/count-by-city?cities=madrid,barcelona,london,lagos,paris,berlin');

  return (
    <div className='featured'>
      {loading ? (
        'Loading please wait'
      ) : (
        <>
          <div className='featured__item'>
            <img
              className='featured__img'
              src='https://t-cf.bstatic.com/xdata/images/city/square250/822312.webp?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&o='
              alt=''
            />
            <div className='featured__titles'>
              <h1>Madrid</h1>
              <h2>{data.list[0]} properties</h2>
            </div>
          </div>
          <div className='featured__item'>
            <img
              className='featured__img'
              src='https://t-cf.bstatic.com/xdata/images/city/square250/815261.webp?k=96c6465292cad5f9afffb2925a9f76b126d4675423300a6e63917f1fcf459a19&o='
              alt=''
            />
            <div className='featured__titles'>
              <h1>Barcelona</h1>
              <h2>{data.list[1]} properties</h2>
            </div>
          </div>
          <div className='featured__item'>
            <img
              className='featured__img'
              src='https://t-cf.bstatic.com/xdata/images/city/square250/684500.webp?k=df54bcea224564a0a00497a2076d5338316a0b56692498eddb3c02c9a6cdde64&o='
              alt=''
            />
            <div className='featured__titles'>
              <h1>London</h1>
              <h2>{data.list[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
