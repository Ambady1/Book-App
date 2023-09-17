import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Bookss from './Pages/Bookss';
import Update from './Pages/Update';
import Add from "./Pages/Add";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Bookss/>}/>
        <Route path='/add' element = {<Add/>}/>
        <Route path='/update' element = {<Update/>}/>       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
