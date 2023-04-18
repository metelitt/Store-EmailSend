import React, { useState, useEffect } from 'react';
import './App.scss';
import {Route, Routes} from 'react-router-dom'
import Main from './components/Main/Main';
import Catalog from './components/Catalog/Catalog';
import CatalogItem from './components/CatalogItem/CatalogItem'
import Basket from './components/Basket/Basket';
import ShowItem from './components/ShowItem/ShowItem';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import SendEmail from './components/SendEmail/SendEmail'
function App(props) {

  const [data, setData] = useState({ message: '' });

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);
  return (
    <div>
      <div>
      <h1>{data.message}</h1>
    </div>
<Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/catalog" element={<Catalog/>}/>
    <Route path='/basket' element={<Basket/>}/>
        <Route path='/ShowItem' element={<ShowItem/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/email' element={<SendEmail/>}/>

</Routes>
</div>
  )
}

export default App;