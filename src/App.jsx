import React from 'react'
import './App.css'
import { ThemeProvider } from '@emotion/react'
import theme from './config/theme'
import { Box, CssBaseline, Typography } from '@mui/material'
import SideNav from './components/SideNav'
import AppHeader from './components/AppHeader'
import { Sidebar, Menu, MenuItem, SubMenu, ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './router/AppRoutes'
function App() {

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
      <CssBaseline/>
      <AppHeader/>
        <Box sx={Styles.container}>
          <BrowserRouter>
          <SideNav/>
          <Box component={'main'} sx={Styles.mainSection}>
            <AppRoutes/>
          </Box>
          </BrowserRouter>
        </Box>
        </ProSidebarProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}


/**@type {import("@mui/material").SxProps}  */
const Styles ={
  container:{
      display:'flex',
      bgcolor:'neutral.light',
      height:'calc(100%-64px)'
  },
  mainSection:{
    p:4,
    width:'100%',
    height:'100%',
    overflow:'auto'
  }
}
export default App
