import './App.css';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import Context from './Context';
import List from './comp/List.js'
import Item from './comp/Item';
import Home from './comp/Home';
import Detail from './comp/Detail';
import Popular from './comp/Popular';

function App() {
  return (
    <Context>
      <HashRouter>
        <header>
          <h1><Link to="/">FLIX</Link></h1>
          <nav>
            <Link to="/Popular">Popular</Link>
            <Link to="/List">movie</Link>
            <Link to="/Item">TV</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Popular" element={<Popular />} />
            <Route path="/List" element={<List />} />
            <Route path="/Item" element={<Item />} />
            <Route path="/detail/:id" element={<Detail />} />
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
