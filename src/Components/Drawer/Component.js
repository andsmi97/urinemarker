import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavItemContainer from './NavItemContainer';
import { useStyles } from './styles';

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [drawerStatus, setStatus] = React.useState(false);

  const toggleDrawer = event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setStatus(!drawerStatus);
  };

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="открыть меню"
        onClick={toggleDrawer}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        open={drawerStatus}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <NavItemContainer route="/" title="Главная" />
          <Divider />
          <NavItemContainer route="/Settings" title="Настройки" />
          <NavItemContainer route="/" title="Выйти" logout />
        </div>
      </SwipeableDrawer>
    </div>
  );
}
