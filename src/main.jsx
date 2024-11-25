import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import SuccessCochingCenter from '../src/components/successCochingCenter/SuccessCochingCenter.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

const router = createBrowserRouter([
  
  {
    path:"/successCochingCenter",
    element:<SuccessCochingCenter/>,
  },
  
  {
    path:"/",
    element:<App/>,
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}></RouterProvider>
)
