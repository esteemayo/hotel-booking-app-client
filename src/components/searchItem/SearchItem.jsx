import './searchItem.scss';

const SearchItem = () => {
  return (
    <div className='searchItem'>
      <img
        src='https://t-cf.bstatic.com/xdata/images/hotel/square600/286659200.webp?k=9206fc9239b3e4538c22d04b85213d6d5e6257015022de8a37effd956fcde4b6&o=&s=1'
        alt=''
        className='searchItem__img'
      />
      <div className='searchItem__desc'>
        <h1 className='searchItem__desc--title'>Tower street apartments</h1>
        <span className='searchItem__desc--distance'>500m from center</span>
        <span className='searchItem__desc--taxiOp'>Free airport taxi</span>
        <span className='searchItem__desc--subtitle'>
          Studio Apartment with air conditioning
        </span>
        <span className='searchItem__desc--features'>
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className='searchItem__desc--cancelOp'>Free cancellation</span>
        <span className='searchItem__desc--cancelOpSubtitle'>
          You can cancel later, so look in this great price today!
        </span>
      </div>
      <div className='searchItem__details'>
        <div className='searchItem__details--rating'>
          <span>Excellent</span>
          <button>4.9</button>
        </div>
        <div className='searchItem__details--texts'>
          <span className='searchItem__details--price'>$123</span>
          <span className='searchItem__details--taxOp'>Includes taxes and fees</span>
          <button className='searchItem__details--checkbtn'>See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
