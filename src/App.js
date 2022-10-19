import './App.css';
import {Header, Footer} from "./components";
import {Films} from "./components/Films/Films";
import {Ganres} from "./components/Ganres/Ganres";

function App() {



  return (
    <div className="App">
        <Header/>
        <div className='block'>
            <Ganres/>
            <Films/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
