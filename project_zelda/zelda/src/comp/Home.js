import '../App.css';
import Header from '../Header';
import Aside from '../Aside';


export default function Home() {
    return (<>
        <Header />
        <main>
            <Aside />
            <div className="home">
                <b>please select a category</b>
            </div>
        </main>
    </>
    );
}

