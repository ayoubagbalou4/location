import './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homme from './Components/Home/Home';
import axios from 'axios'
import Register from './Components/Pages/Register';
import Login from './Components/Pages/Login';
import Cars from './Components/Cars/CarList'
import CarDetail from './Components/Cars/SingleCar'


import NavbarAdmin from './Components/Admin/Navbar/Navbar' 
import CarsAdmin1 from './Components/Admin/Pages/Page1' 
import CarsAdmin2 from './Components/Admin/Pages/Page2' 
import CarsAdmin3 from './Components/Admin/Pages/Cars' 
import CarsAdmin4 from './Components/Admin/Pages/Page4' 
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import HomeAdmin from './Components/Admin/Home/Home' 


function App() {

  axios.defaults.baseURL = 'https://8080-idx-location-voiture-1745922566296.cluster-3gc7bglotjgwuxlqpiut7yyqt4.cloudworkstations.dev'


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homme />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Cars' element={<Cars />} />
        <Route path="/car/:id" element={<CarDetail />} />
        <Route path="/Admin/Dashboard/:id" element={<NavbarAdmin />} /> 
        <Route path="/Admin/Dashboard/Cars" element={<NavbarAdmin><CarsAdmin3 /></NavbarAdmin>} />
        <Route path="/About" element={<About />} /> 
        <Route path="/Contact" element={<Contact />} /> 

        <Route path="/Admin/Dashboard/Cars" element={<NavbarAdmin><CarsAdmin3 /></NavbarAdmin>} />
        <Route path="/Admin/Dashboard" element={<NavbarAdmin><HomeAdmin /></NavbarAdmin>} />
  
    
      </Routes>
    </BrowserRouter>
  )
}

export default App

