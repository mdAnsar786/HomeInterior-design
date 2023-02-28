import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';

const Header = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{background:"black",color:"yellow"}}>
          <Toolbar style={{display:"flex",justifyContent:"space-between"}}>
            <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                FURNKA
              </Typography>
              {/* <MenuIcon /> */}
            </IconButton>
            </div>
            <div style={{display:"flex",justifyContent:"space-between",marginRight:"10px"}}>
            <Typography style={{marginRight:"20px"}}>
              Home
            </Typography>
            <Typography style={{marginRight:"20px"}}>
              Design ides
            </Typography>
            <Typography style={{marginRight:"20px"}}>
              Home Interior
            </Typography>
            <Typography style={{marginRight:"20px"}}>
              Home Interior2
            </Typography>
            <Typography style={{marginRight:"20px"}}>
              Home Interior3
            </Typography>
            <Typography style={{marginRight:"20px"}}>
              Home Interior4
            </Typography>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;