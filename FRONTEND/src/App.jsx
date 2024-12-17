import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import ReadPage from "./pages/ReadPage";
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {context} from './context/context'
import { useEffect, useState } from "react";
import axios from 'axios'

function App() {

  const [list, setList] = useState([]);

  async function fetchData() {
    const response = await axios.get('http://localhost:3000/api/v1/data/list');
    const data = response.data;
    console.log(data);
    setList(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <context.Provider value={{list, setList}}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/CreatePage' element={<CreatePage />} />
          <Route path='/ReadPage' element={<ReadPage />} />
        </Routes>
      </context.Provider> 
    </BrowserRouter>
  );
}

export default App;
