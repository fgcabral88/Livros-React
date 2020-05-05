import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
          <Tooltip title="Lista de Livros">
            <Link to={'/'}>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuBookOutlinedIcon/>
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title="Adicionar Livro">
            <Link to={`/form`}>
              <IconButton edge="start" color="inherit" aria-label="menu">
                <AddCircleOutlineIcon />
              </IconButton>
            </Link>
          </Tooltip>
        </Toolbar>
    </AppBar>
  )
}

export default Header;