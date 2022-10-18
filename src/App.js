import './App.css';
import {Header, Footer} from "./components";
import {Films} from "./components/Films/Films";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className='block'>
            <Films/>
        </div>
        <Footer/>
    </div>
  );
}

export default App;
