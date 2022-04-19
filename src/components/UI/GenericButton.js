import { Button } from '@mui/material';
import React from 'react';
import TicketIcon from '../../resources/images/icons/ticket.png';
import classes from '../../resources/styles.module.css';

const GenericButton = (props) => {
  return (
    <Button
      href={props.link}
      variant="contained"
      size={props.size ? props.size : 'large'}
      style={{
        background: '#8e8e8e',
        color: '#ffffff',
        ...props.style,
      }}
    >
      {props.iconTicket ? (
        <img
          src={TicketIcon}
          className={classes.iconImage}
          alt="icon_button"
        ></img>
      ) : null}

      {props.text}
    </Button>
  );
};

export default GenericButton;
