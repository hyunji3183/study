import './App.css';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import Context from './Context';
import List from './comp/List';

function App() {
  return (
    <Context>
      <HashRouter>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/List">list</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/List" element={<List />} />
            {/* <Route path="/modify" element={<Modify/>}/> */}
          </Routes>
        </main>
      </HashRouter>
    </Context>
  );
}

export default App;



// list (2)
// <Route path="/:type" Elements={<List/>}
// <Route path="/:type/:id" Elements={<Detail/>}
// <Route path="/:type/search/:keyword" Elements={<Search/>}

// function List(){

// }
