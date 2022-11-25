import Featured from 'components/featured/Featured';
import FeaturedProperties from 'components/featuredProperties/FeaturedProperties';
import ProperList from 'components/propertyList/ProperList';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <h1 className='home__title'>Browse by property type</h1>
      <ProperList />
      <h1 className='home__title'>Home guests love</h1>
      <FeaturedProperties />
    </div>
  );
};

export default Home;
