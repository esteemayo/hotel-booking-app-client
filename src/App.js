import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { loginInputs } from 'data';
import { Home, Hotel, Layout, List, Login, NotFound } from 'pages';
import ProtectedRoute from 'utils/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='hotels' element={<List />} />
          <Route path='hotels/:slug' element={<Hotel />} />
          <Route path='/login'
            element={
              <ProtectedRoute>
                <Login inputs={loginInputs} />
              </ProtectedRoute>
            }
          />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
