import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import LifeCycleComponent from './container/LifeCycleComponent/LifeCycleComponent';
import GetApi from './container/GetApi/GetApi';
import Home from './container/Home/Home';
import ErrorPage from './container/General/ErrorPage';
import DetailApi from './container/GetApi/DetailApi';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/getapi",
    element: <GetApi />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/detail/:detailID",
    element: <DetailApi />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Home /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
