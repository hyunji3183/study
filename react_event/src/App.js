import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import $ from 'jquery';
import ReactVideo from './page/ReactVideo';
import Slide from './page/Slide';
import Framer from './page/Framer';
import JQuery from './page/JQuery';
import Selector from './page/Selector';
import Scroll from './page/Scroll';

function App() {
    return (
        <>
            <BrowserRouter>
                <nav>
                    <Link to="/Selector"> Selector (useRef) </Link>
                    <Link to="/Scroll"> Scroll </Link>
                    <Link to="/JQuery"> JQuery </Link>
                    <Link to="/Framer"> Framer Motion </Link>
                    <Link to="/Slide"> Slide Swiper </Link>
                    <Link to="/ReactVideo"> ReactVideo </Link>
                </nav>
                <main>
                    <Routes>
                        <Route path="/Selector" element={<Selector />} />
                        <Route path="/Scroll" element={<Scroll />} />
                        <Route path="/JQuery" element={<JQuery />} />
                        <Route path="/Framer" element={<Framer />} />
                        <Route path="/Slide" element={<Slide />} />
                        <Route path="/ReactVideo" element={<ReactVideo />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </>
    );
}

export default App;
