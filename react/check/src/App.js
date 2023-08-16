import './App.css';
import Write from './page/Write';
import List from './page/List';
import MyContext from './MyContext';


function App() {
    return (
        <MyContext>
            <List />
            <Write />
        </MyContext>
    );
}

export default App;
