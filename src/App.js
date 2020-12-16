

import React, { createContext, useState } from "react";
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import Home from './Components/Home/Home/Home';
import Login from "./Components/Login/Login/Login";
import DashBoard from "./Components/Dashboard/Dashboard/DashBoard";
import AllPatients from "./Components/Dashboard/Dashboard/AllPatients/AllPatients";
import Adddoctor from "./Components/Adddoctor/Adddoctor";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";



export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/appointment">
          <Appointment></Appointment>
        </Route>
        <PrivateRoute exact path="/dashboard">
          <DashBoard></DashBoard>
        </PrivateRoute>
        <Route exact path="/allPatients">
            <AllPatients></AllPatients>
          </Route>
          <Route path="/adddoctor">
            <Adddoctor></Adddoctor>
          </Route>
        <Route path="/login">
          <Login></Login>
       </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
