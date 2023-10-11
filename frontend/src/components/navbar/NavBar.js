import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import verifyToken from '../../utils/verifyToken';

function NavBar() {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
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
    </nav>
  );
}

export default NavBar;
