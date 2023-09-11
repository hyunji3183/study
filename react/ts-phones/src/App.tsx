import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Newdata from './Newdata';
import List from './List';
import { MyContext } from './MyContext';
import tel from './tel.png'

function App() {
	return (
		<>
			<BrowserRouter>
				<div className='home'>
					<Link to="/"><h2>Contact Application</h2></Link>
					<img src={tel}></img>
					<nav>
						<Link to="/Newdata">신규등록</Link>
						<Link to="/List">리스트</Link>

					</nav>
				</div>
				<MyContext>
					<Routes>
						<Route path='/Newdata' element={<Newdata />} />
						<Route path='/List' element={<List />} />
					</Routes>
				</MyContext>
			</BrowserRouter>
		</>
	);
}

export default App;
