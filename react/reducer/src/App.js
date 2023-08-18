import './App.css';
import List from './page/List';
import Write from './page/Write';
import Context from './Context';

function App() {
    return (
        <Context>
            <Write />
            <List />
        </Context>
    );
}

export default App;
