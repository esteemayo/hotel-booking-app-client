import { Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import Navbar from 'components/navbar/Navbar';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar />
      {pathname === '/' && <Header />}
      <ToastContainer />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
