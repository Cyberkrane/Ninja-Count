import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// componentes

import  Login  from "./componentes/login";
import  Register  from "./componentes/register";
import  Ingresos  from "./componentes/ingresos";
import  Gastosfijos  from "./componentes/gastos-fijos";
import  Gastosdiarios from "./componentes/gastos-diarios";
import  LogrosAngel  from "./componentes/logrosAngel";
import  NavBar  from "./layout/nav-Bar";


function App() {
  return (
    <div className="App">
     <BrowserRouter>

     <Routes>

      <Route path='/' element={ <NavBar /> }>
      <Route path='Login' element={ <Login /> }/>
      <Route path='Register' element={ <Register /> }/>
      <Route path='Ingresos' element={ <Ingresos /> }/>
      <Route path='Gastos_fijos' element={ <Gastosfijos /> }/>
      <Route path='Gastos_diarios' element={ <Gastosdiarios /> }/>
      <Route path='Logros_Angel' element={ <LogrosAngel /> }/>
      <Route path='*' element={ <Navigate replace to="/" /> }></Route>

      </Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
