import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import ProtectedRoute from './components/ProtectedRoute';
import Bekasi from './containers/Bekasi';
import CuacaDetail from './containers/CuacaDetail';
import Home from './containers/Home';
import Jakbar from './containers/Jakbar';
import Jakkep from './containers/Jakkep';
import Jakpus from './containers/Jakpus';
import Jaksel from './containers/Jaksel';
import Jakut from './containers/Jakut';
import Jaktim from './containers/Jaktim';
import Login from './containers/Login';
import NoMatch from './containers/NoMatch';
import Register from './containers/Register';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <App />
          </ProtectedRoute>} />
        <Route path="login" element={
          <ProtectedRoute loginOnly={false}>
            <Login />
          </ProtectedRoute>} />
        <Route path="register" element={
          <ProtectedRoute loginOnly={false}>
            <Register />
          </ProtectedRoute>} />
        <Route path="detail" element={
          <ProtectedRoute>
            <CuacaDetail />
          </ProtectedRoute>} />
          <Route path="home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>} />
          <Route path="bekasi" element={
          <ProtectedRoute>
            <Bekasi />
          </ProtectedRoute>} />
          <Route path="jaktim" element={
          <ProtectedRoute>
            <Jaktim />
          </ProtectedRoute>} />
          <Route path="jakbar" element={
          <ProtectedRoute>
            <Jakbar />
          </ProtectedRoute>} />
          <Route path="jaksel" element={
          <ProtectedRoute>
            <Jaksel />
          </ProtectedRoute>} />
          <Route path="jakut" element={
          <ProtectedRoute>
            <Jakut />
          </ProtectedRoute>} />
          <Route path="jakpus" element={
          <ProtectedRoute>
            <Jakpus />
          </ProtectedRoute>} />
          <Route path="jakkep" element={
          <ProtectedRoute>
            <Jakkep />
          </ProtectedRoute>} />

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
