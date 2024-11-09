import React from 'react'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Splash from './pages/Splash';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route index element={<Splash />} />
    <Route path='/dashboard' element={<Dashboard />} />
    </Route>
  ));

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
        <RouterProvider router={router} />
  </div>
  )
}

export default App