import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import List from './comp/List';
import MyContext from './MyContext';
import Write from './comp/Write';
function App() {
    return (
        <>
            <BrowserRouter>
                <header>
                    <Link to="/">HOME</Link>
                    <Link to="/write">community</Link>
                </header>
                <main>
                    <MyContext>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/write' element={<Write />} />
                        </Routes>
                    </MyContext>
                </main>
            </BrowserRouter>
        </>
    );
}

export default App;
