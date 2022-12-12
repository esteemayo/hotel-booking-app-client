import useFetch from 'hooks/useFetch';
import './propertyList.scss';

const PropertyList = () => {
  const { data, loading } = useFetch('/hotels/count-by-type');

  const images = [
    'https://t-cf.bstatic.com/xdata/images/city/square250/808081.webp?k=741722d4e7757b648faf551d5566d2259d3a0f31824f5893aab9f37f43fc7232&o=',
    'https://t-cf.bstatic.com/xdata/images/city/square250/661041.webp?k=9b623dbbbf3f001248b38d9e75f2a71f985b44436b2fd871d2e6153c3d76a9be&o=',
    'https://t-cf.bstatic.com/xdata/images/city/square250/955874.webp?k=4a962e9b93f968482ab2a4df07a766be2ba265fb473abbc02c855560a33f4425&o=',
    'https://t-cf.bstatic.com/xdata/images/city/square250/853006.webp?k=49f75610fb56878eb04a87432a9fa76f3b3e3d68383996d46c7dbbf53c5467c2&o=',
    'https://t-cf.bstatic.com/xdata/images/city/square250/815261.webp?k=96c6465292cad5f9afffb2925a9f76b126d4675423300a6e63917f1fcf459a19&o=',
  ];

  return (
    <div className='propertyList'>
      {loading ? (
        'loading'
      ) : (
        <>
          {data &&
            images.map((item, index) => {
              return (
                <div key={index} className='propertyList__item'>
                  <img
                    src={item}
                    alt=''
                    className='propertyList__img'
                  />
                  <div className='propertyList__title'>
                    <h1>{data[index]?.type}</h1>
                    <h2>{data[index]?.count} {data[index]?.type}</h2>
                  </div>
                </div>
              );
            })}
        </>
      )}
    </div>
  );
};

export default PropertyList;
