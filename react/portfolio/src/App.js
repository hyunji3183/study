import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Intro from './comp/Intro';
import Page from './comp/Page';
import About from './comp/About';
import Skill from './comp/Skill';
import Contact from './comp/Contact';
import Project from './comp/Project';


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Intro />} />
                    <Route path="/page" element={<Page />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skill" element={<Skill />} />
                    <Route path="/project" element={<Project />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
