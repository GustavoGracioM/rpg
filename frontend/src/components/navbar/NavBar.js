import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Button, ButtonGroup, IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import verifyToken from '../../utils/verifyToken';
import logo from '../../image/logo2.png';

const useStyles = makeStyles(() => createStyles({
  logo: {
    maxWidth: 200,
    margin: 10,
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  margin: {
    margin: 10,
  },
}));

function NavBar() {
  const navigate = useNavigate();
  const classse = useStyles();
  const [, setUser] = useState({});
  useEffect(() => {
    verifyToken().then((userInfo) => {
      setUser(userInfo);
    }).catch(() => navigate('/login'));
  }, []);
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  return (
    <div className={ classse.flex }>
      <img src={ logo } srcSet={ logo } alt="logo" className={ classse.logo } />
      <div className={ classse.margin }>
        <ButtonGroup variant="text" color="inherit" aria-label="text button group">
          <Button onClick={ () => navigate('/character') }>
            Personagens
          </Button>
          <Button onClick={ () => navigate('/boards') }>
            Boards
          </Button>
        </ButtonGroup>
        <IconButton onClick={ handleClick }><AccountCircleIcon /></IconButton>
        <Menu
          onClose={ handleClose }
          open={ open }
          anchorEl={ anchorEl }
        >
          <MenuItem onClick={ () => navigate('/friends') }>Frineds</MenuItem>
          <MenuItem onClick={ logout }>Sair</MenuItem>
        </Menu>
      </div>
    </div>

  );
}

export default NavBar;
