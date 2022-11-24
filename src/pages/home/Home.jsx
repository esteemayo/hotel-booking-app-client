import Featured from 'components/featured/Featured';
import ProperList from 'components/propertyList/ProperList';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <h1 className='home__title'>Browse by property type</h1>
      <ProperList />
    </div>
  );
};

export default Home;
