import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SourceIcon from '@mui/icons-material/Source';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { useTheme } from '@emotion/react';
import { Link, useLocation } from 'react-router-dom';
function SideNav() {
    const{collapsed} = useProSidebar();
    const theme = useTheme();
    const location = useLocation();
  return (
    <Sidebar style={{
        height:'100%',
        top:'auto'
    }}
    breakPoint='md'
    backgroundColor={theme.palette.neutral.light}
    >
        <Box sx={styles.avatarContainer}>
            <Avatar sx={styles.avatar} alt='Channel Name' src="src/assets/avatars/masoud.jpeg"/>
            { !collapsed ?<Typography variant='body2' sx={styles.yourChannel}>Your Channel</Typography> : null}
            { !collapsed ? <Typography variant='overline'>React Channel</Typography> : null}
        </Box>
        <Menu menuItemStyles={{
            button: ({active}) => {
                return{
                    backgroundColor: active ? theme.palette.neutral.medium : undefined
                }
            }
        }}>
            <MenuItem active={location.pathname === '/'} icon={<DashboardIcon/>} component={<Link to="/"/>}>
            <Typography variant='body2'>DashBoard</Typography>
            </MenuItem>
            <MenuItem active={location.pathname ==='/content'} icon={<SourceIcon/>} component={<Link to= "/content"/>}>
            <Typography variant='body2'>content</Typography>
            </MenuItem>
            <MenuItem active={location.pathname === '/analytics'} icon={<AnalyticsIcon/>} component={<Link to="/analytics"/>}>
            <Typography variant='body2'>Analytics</Typography>
            </MenuItem>
            <MenuItem active={location.pathname === '/customization'} icon={<ChangeCircleIcon/>} component={<Link to="/customization"/>}>
            <Typography variant='body2'>Customization</Typography>
            </MenuItem>
        </Menu>
    </Sidebar>
  )
}


/**@type {import("@mui/material").SxProps}  */
const styles ={
    avatarContainer:{
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        my:5
    },
    avatar:{
        width:'40%',
        height:'auto'
    },
    yourChannel:{
        mt: 1
    }
}

export default SideNav