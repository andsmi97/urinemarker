import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import ContactIcon from '@material-ui/icons/ContactMail';
import HomeIcon from '@material-ui/icons/Home';
import ExitIcon from '@material-ui/icons/ExitToApp';

const icon = {
  Главная: <HomeIcon />,
  Настройки: <ContactIcon />,
  Выйти: <ExitIcon />,
};

const NavItem = ({ route, title, logout, onClickLogout }) => {
  return logout ? (
    <ListItem button onClick={onClickLogout}>
      <ListItemIcon>{icon[title]}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  ) : (
    <ListItem button component={Link} to={route}>
      <ListItemIcon>{icon[title]}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
};

export default NavItem;
