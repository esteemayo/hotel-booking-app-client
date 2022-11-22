import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Layout, List } from 'pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='hotels' element={<List />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
