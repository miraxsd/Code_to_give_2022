import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './pages/Login';
import Welcome from './pages/Welcome';
import Dashboard from './pages/Dashboard';
import PostPage from './pages/PostPage';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Share from './pages/Share';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<App/>}>
        <Route index element={<App/>}/>
      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/welcome' element={<Welcome/>}/>
      <Route path='/share' element={<Share/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/postpage' element={<PostPage/>}/>
    
    </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
