import './App.css';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import List from './component/List';
import Insert from './component/Insert';
import Context from './Context';
import Modify from './component/Modify';

function App() {

    return (
        <Context>
            <HashRouter>
                <header>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/insert">글쓰기</Link>
                    </nav>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<List />} />
                        <Route path="/insert" element={<Insert />} />
                        <Route path="/modify" element={<Modify/>}/>
                    </Routes>
                </main>
            </HashRouter>
        </Context>
    );
}

export default App;
