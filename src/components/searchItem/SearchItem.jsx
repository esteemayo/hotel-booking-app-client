import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';

import { excerpts } from 'utils';
import './searchItem.scss';

const SearchItem = ({ name, slug, distance, photos, desc, rating, cheapestPrice }) => {
  return (
    <div className='searchItem'>
      <img
        src={photos[0]}
        alt={name}
        className='searchItem__img'
      />
      <div className='searchItem__desc'>
        <h1 className='searchItem__desc--title'>{name}</h1>
        <span className='searchItem__desc--distance'>
          <NumericFormat
            value={distance}
            displayType={'text'}
            thousandSeparator={true}
            suffix={'m'}
          /> from
        </span>
        <span className='searchItem__desc--taxiOp'>Free airport taxi</span>
        <span className='searchItem__desc--subtitle'>
          Studio Apartment with air conditioning
        </span>
        <span className='searchItem__desc--features'>{desc && excerpts(desc, 100)}</span>
        <span className='searchItem__desc--cancelOp'>Free cancellation</span>
        <span className='searchItem__desc--cancelOpSubtitle'>
          You can cancel later, so look in this great price today!
        </span>
      </div>
      <div className='searchItem__details'>
        {rating && (
          <div className='searchItem__details--rating'>
            <span>Excellent</span>
            <button>{rating.toFixed(1)}</button>
          </div>
        )}
        <div className='searchItem__details--texts'>
          <span className='searchItem__details--price'>
            <NumericFormat
              value={cheapestPrice}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
            />
          </span>
          <span className='searchItem__details--taxOp'>Includes taxes and fees</span>
          <Link to={`/hotels/${slug}`}>
            <button className='searchItem__details--checkbtn'>See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
