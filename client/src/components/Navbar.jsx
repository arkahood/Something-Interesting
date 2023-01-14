import * as React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';


import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../redux-toolkit/slices/authSlice';


const Navbar = () => {

  const isLoggedIn = useSelector((state)=>state.auth.isLoggedin);

  const dispatch = useDispatch();

  const clck = () => {
    window.alert("Clicked");
  }

  const handlelogout = ()=>{
    dispatch(logout());
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#404258' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            Put LOGO
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0, mr: 3 }} style={{cursor:"grab"}} >
        	<Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>Home</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 0, mr: 3 }} style={{cursor:"grab"}}>
            <Link to="/coun" style={{ color: 'inherit', textDecoration: 'inherit'}}>nav</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{cursor:"grab"}} onClick={clck}>
            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>Home</Link>
          </Typography>

          {/*  */}
          {isLoggedIn ?
            <div>
              <Button color='inherit' variant="outlined" onClick={handlelogout}>LogOut</Button>
            </div>  
          :
            <div>
            <Link to="/signup" style={{ color: 'inherit', textDecoration: 'inherit'}}>
              <Button color='inherit' variant="outlined">Login</Button>
              </Link>
            </div>
          } 
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;