import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import verifyToken from '../../utils/verifyToken';
import { useAppThemeContext } from '../../shared/contexts/ThemeContext';

function NavBar() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const { toggleTheme } = useAppThemeContext();
  useEffect(() => {
    verifyToken().then((userInfo) => {
      setUser(userInfo);
    }).catch(() => navigate('/login'));
  }, []);
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  return (
    <nav>
      <button type="button" onClick={ () => navigate('/character') }>
        Personagens
      </button>
      <button type="button" onClick={ () => navigate('/boards') }>
        Boards
      </button>
      <button type="button" onClick={ () => navigate('/friends') }>
        Frineds
      </button>
      <button type="button" onClick={ logout }>
        Sair
      </button>
      {user.name}
      <Button onClick={ toggleTheme }>mudar</Button>
    </nav>
  );
}

export default NavBar;
