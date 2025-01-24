import Home from './components/Home';
import Login from './components/Login';
import Header from './components/partials/Header';
import Register from './components/Register';
import {  BrowserRouter,Routes,Route} from 'react-router-dom';
import TodoList from './components/TodoList';

function App() {
  return(
  
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element ={<Home/>} /> 
      <Route path="/login" element ={<Login/>}/> 
      <Route path="/register" element ={<Register/>}/> 
          <Route exact path="/" component={ TodoList } /> 
    </Routes>
    
    
    </BrowserRouter>
  
  
  );

}

export default App;
