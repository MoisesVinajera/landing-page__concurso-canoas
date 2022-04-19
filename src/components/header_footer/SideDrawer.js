import { Drawer, List, ListItem } from '@mui/material';
import React from 'react';
import { scroller } from 'react-scroll';

// { where: 'highlights', value: 'Highlights' },
const SideDrawer = (props) => {
  const links = [
    { where: 'featured', value: 'Inicio' },
    { where: 'venuenfo', value: 'Información' },

    { where: 'pricing', value: 'Precios' },
    { where: 'location', value: 'Ubicacion' },
  ];

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -85,
    });
    props.onClose(false);
  };

  const renderItem = (item) => (
    <ListItem
      button
      onClick={() => scrollToElement(item.where)}
      key={item.where}
    >
      {item.value}
    </ListItem>
  );

  return (
    <Drawer anchor="right" open={props.open} onClose={props.onClose}>
      <List component="nav">{links.map(renderItem)}</List>
    </Drawer>
  );
};

export default SideDrawer;
