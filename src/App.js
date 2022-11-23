import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Hotel, Layout, List, SharedLayout } from 'pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='hotels' element={<SharedLayout />}>
            <Route index element={<List />} />
            <Route path='/:slug' element={<Hotel />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
