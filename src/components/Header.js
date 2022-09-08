import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [value, setValue] = useState();
  return (
    <AppBar sx={{backgroundColor: '#232F3D' }} position='sticky'>
        <Toolbar>
            <NavLink to='/' style={{color: 'white'}}>
            <Typography>
                <MenuBookIcon />
            </Typography>
            </NavLink>
        <Tabs 
        sx={{ml: 'auto'}}
        textColor='inherit' 
        indicatorColor="primary" 
        value={value} 
        onChange={(e, val) => setValue(val)}>
            
            <Tab LinkComponent={NavLink} to='/add' label='Add Book' />
            <Tab LinkComponent={NavLink} to='/books' label='All Books' />
            <Tab LinkComponent={NavLink} to='/about' label='About' />
        </Tabs>

        </Toolbar>
    </AppBar>
  )
}

export default Header