import React from 'react'
import { Route, Routes,createBrowserRouter } from 'react-router-dom'
import Dashboard from '../containers/Dashboard'
import Analytics from '../containers/Analytics/Analytics';
import Content from '../containers/Content';
import Customization from '../containers/Customization';
function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path='/content' element={<Content/>} />
        <Route path='/analytics' element={<Analytics/>} />
        <Route path='/customization' element={<Customization/>} />
    </Routes>
  )
}

export default AppRoutes