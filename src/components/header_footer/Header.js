import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import classes from '../../resources/styles.module.css';
import React, { useEffect, useState } from 'react';
import SideDrawer from './SideDrawer';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [headerShow, setHeaderShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (event) => {
    if (window.scrollY > 0) {
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
    }
  };
  const toggleDrawer = () => {
    setDrawerOpen((prevState) => {
      return (prevState = !prevState);
    });
  };

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: headerShow ? '#27b8d5' : 'transparent',
        boxShadow: 'none',
        padding: '10px 0px',
      }}
      className={headerShow ? classes.bck_blue : 'transparent'}
    >
      <Toolbar>
        <div className={classes.header_logo}>
          <div className={` ${classes.header_logo_venue}`}>
            El capítulo estudiantil
          </div>
          <div className={classes.header_logo_title}>ACI Uady</div>
        </div>
        <IconButton aria-label="Menu" color="inherit" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <SideDrawer open={drawerOpen} onClose={toggleDrawer} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
