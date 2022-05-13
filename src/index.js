import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {createStore,applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
// import reducer from'./reducer/reducer';
import thunk from 'redux-thunk';
import Login from './login';
import InjuryCentre from './curdfunctions/injurycentre';
import IncidentCentre from './curdfunctions/incidentcentre';
import Reports from './curdfunctions/reports';


const store=createStore(applyMiddleware(thunk))
store.subscribe(()=>{
  console.log(store.getState())
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Provider store={store}>
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<Login/>}/>
     <Route path='/home' element={<App/>}>
      <Route path='/home/injurycentre' element={<InjuryCentre/>}/>
      <Route path='/home/incidentcentre' element={<IncidentCentre/>}/>
      <Route path='/home/reports' element={<Reports/>}/>


     </Route>
       </Routes></BrowserRouter>
 </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
