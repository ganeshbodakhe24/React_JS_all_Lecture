import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { EventHandling } from './Component/Event_handling';
import reportWebVitals from './reportWebVitals';
import UseState_function from './Component/UseState_function';
import Inc_dec_number from './Component/Inc_dec_number';
import State_in_class from './Component/State_in_class';
import { Props_function } from './Component/Props_function';
import List from './Component/List';
import Main from './Routing_in_react/Main';
import Login_main from './Login_Logout/Login_main';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* all tutorial present in list component */}
    <List></List>

    {/* all routing present in main component  */}
    {/* <Main></Main> */}
    {/* protected routing present in Login_main conmponent */}
    {/* <Login_main></Login_main> */}
    {/* <App /> */}
    {/* <EventHandling></EventHandling> */}
    {/* <UseState_function></UseState_function> */}
    {/* <Inc_dec_number></Inc_dec_number> */}
    {/* <UseState_function></UseState_function> */}



    {/* props function */}
    {/* <Props_function name={"Ganesh"} Email="bodakhe@2003"></Props_function>
    <Props_function name={"Ganesh"} Email="bodakhe@2003"></Props_function> */}


  </React.StrictMode>
);

reportWebVitals();
