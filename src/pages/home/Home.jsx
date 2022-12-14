import Featured from 'components/featured/Featured';
import MailList from 'components/mailList/MailList';
import PropertyList from 'components/propertyList/PropertyList';
import FeaturedProperties from 'components/featuredProperties/FeaturedProperties';

import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <h1 className='home__title'>Browse by property type</h1>
      <PropertyList />
      <h1 className='home__title'>Home guests love</h1>
      <FeaturedProperties />
      <MailList />
    </div>
  );
};

export default Home;
