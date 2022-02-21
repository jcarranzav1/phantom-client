import React from 'react';
import './topbar.css';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link, useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { useDispatch } from '../../../store/authStore';
import { types } from '../../../types/types';

export default function Topbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSignOut = () => {
    dispatch({ type: types.adminSignout });
    navigate('/');
  };

  return (
    <div className="topbar" style={{ fontFamily: 'Source Sans Pro' }}>
      <div className="topbarWrapper">
        <Link to="/admin">
          <div className="topLeft">
            <span className="logo">Phantom</span>
          </div>
        </Link>
        <div className="adminAvatar">
          <NavDropdown
            id="basic-nav-dropdown"
            style={{ marginLeft: '25px' }}
            title={<PersonOutlineIcon />}>
            <NavDropdown.Item as={Link} className="dropItem" to="/">
              Go to Store
            </NavDropdown.Item>
            <NavDropdown.Item onClick={onSignOut}>Sign Out</NavDropdown.Item>
          </NavDropdown>
        </div>
      </div>
    </div>
  );
}
