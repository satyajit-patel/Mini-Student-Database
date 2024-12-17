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

  // async function fetchData() {
  //   const response = await axios.get('http://localhost:3000/api/v1/data/list');
  //   const data = response.data;
  //   console.log(data);
  //   setList(data);
  // }

  useEffect(() => {
    //fetchData();

    const students = [
      { name: 'John Doe', reg: '23CSE10001' },
      { name: 'Jane Smith', reg: '23CSE10002' },
      { name: 'Michael Johnson', reg: '23CSE10003' },
      { name: 'Emily Davis', reg: '23CSE10004' },
      { name: 'David Brown', reg: '23CSE10005' },
      { name: 'Olivia Wilson', reg: '23CSE10006' },
      { name: 'James Taylor', reg: '23CSE10007' },
      { name: 'Sophia Moore', reg: '23CSE10008' },
      { name: 'William Lee', reg: '23CSE10009' },
      { name: 'Isabella Harris', reg: '23CSE10010' }
    ];
    setList(students);

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
