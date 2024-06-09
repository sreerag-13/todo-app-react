
import logo from './logo.svg';
import './App.css';
import ViewTod from './components/ViewTod';
import DeleteTod from './components/DeleteTod';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/News';

function App() {
  return (
   <BrowserRouter>

   <Routes>
    <Route path='/' element={<DeleteTod/>}/>
    <Route path='/ViewTod' element={<ViewTod/>}/>
    <Route path='/News' element={<News/>}/>

   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
