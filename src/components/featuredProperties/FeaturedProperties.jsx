import useFetch from 'hooks/useFetch';
import './featuredProperties.scss'

const FeaturedProperties = () => {
  const { data, loading } = useFetch('/hotels?featured=true&limit=4');

  return (
    <div className='featuredProperties'>
      {loading ? 'Loading' : (
        <>
          {data?.hotels?.map((item) => {
            const { _id: id, name, city, photos, rating, cheapestPrice } = item;
            return (
              <div key={id} className='featuredProperties__item'>
                <img
                  src={photos[0]}
                  alt={name}
                  className='featuredProperties__img'
                />
                <span className='featuredProperties__name'>{name}</span>
                <span className='featuredProperties__city'>{city}</span>
                <span className='featuredProperties__price'>Starting from ${cheapestPrice}</span>
                {rating && (
                  <div className='featuredProperties__rating'>
                    <button>{rating}</button>
                    <span>Excellent</span>
                  </div>
                )}
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
