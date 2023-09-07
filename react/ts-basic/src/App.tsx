import React, { useState } from 'react';
import './App.css';
import data from './data.json';
import Item from './Item';
import { ty_data } from './types';

const App: React.FC = () => {
    const [init, setInit] = useState<ty_data>(data)
    // const init: ty_data = data;

    return (
        <>
            <Item data={init} />
        </>
    );
}

export default App;
