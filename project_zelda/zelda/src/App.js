import { HashRouter, Route, Routes, Link, Router,  BrowserRouter, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

import './App.css';
import Main from './Main';
import Home from './Home';
import Creatures from './comp/Creatures';

const App = () => {



    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Main />}  />
                <Route path="/creatures" element={ <Creatures />}  />
                <Route path="/home" element={ <Home />}  />
            </Routes>
        </BrowserRouter>
        </>
    );
};



export default App;
