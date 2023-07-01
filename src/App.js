
import './App.css';
import { counterActions } from './store/store/slice/counter';
import { useSelector } from 'react-redux';
import Home from './home';
import "./home.css"
import Create from './create';
// import Main from './main';
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {

  let person=useSelector((state)=>state.person)
  console.log(`====>> data`,person)
  return (
    <div className="App">
      
<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/create' element={<Create/>}></Route>
   
</Routes>
</BrowserRouter>
       {/* <Main/>   */}
      
    </div>
  );
}

export default App;
