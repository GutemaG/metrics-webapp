import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Detail from './pages/Detail';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
