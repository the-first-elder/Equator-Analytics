import React from 'react'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Splash from './pages/Splash';
import Dashboard from './pages/Dashboard';
import Layout from './Layout/Layout';
import Launchpad from './pages/Launchpad';
import Quest from './pages/Quest';
import Analytic from './pages/Analytic';

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route index element={<Splash />} />
    <Route path='/dashboard' element={<Layout />}>
    <Route index element={<Dashboard />} />
    <Route path='analytics' element={<Analytic />} />
    <Route path='launchpad' element={<Launchpad />} />
    <Route path='quests' element={<Quest />} />
    </Route>
    </Route>
  ));

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto font-Open-Sans">
        <RouterProvider router={router} />
  </div>
  )
}

export default App