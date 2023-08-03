import NavBar from './components/NavBar';
import Home from './pages/home/Home';
import { Routes,Route } from 'react-router-dom';
import Login from './pages/login/Login'
import Patient from './pages/patient/Patient'
import Reports from './pages/reports/Reports';
import StaffInfo from './pages/staffInfo/StaffInfo';
import Payment from './pages/payment/Payment'

function App() {
  return (
    <div >
     <NavBar/>
<Routes>
  <Route path='/' element={<Home/>}></Route>  
  <Route path='/patient' element={<Patient/>}></Route>
  <Route path='/payment' element={<Payment/>}></Route>
  <Route path='/reports' element={<Reports/>}></Route>
  <Route path='/staffinfo' element={<StaffInfo/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
</Routes>
   </div>
  );
}

export default App;
