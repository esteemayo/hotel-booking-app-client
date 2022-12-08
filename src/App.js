import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProtectedRoute from 'utils/ProtectedRoute';
import { loginInputs, registerInputs } from 'data';
import { Home, Hotel, Layout, List, Login, NotFound, Register } from 'pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='hotels' element={<List />} />
          <Route path='hotels/:slug' element={<Hotel />} />
          <Route path='login'
            element={
              <ProtectedRoute>
                <Login inputs={loginInputs} />
              </ProtectedRoute>
            }
          />
          <Route path='register'
            element={
              <ProtectedRoute>
                <Register inputs={registerInputs} />
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
