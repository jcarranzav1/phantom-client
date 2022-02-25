import React, { useState } from 'react';
import styled from '@emotion/styled';
import Badge from '@mui/material/Badge';
import Search from '@mui/icons-material/Search';
import queryString from 'query-string';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Dropdown, DropdownButton, NavDropdown } from 'react-bootstrap';
import { useApolloClient } from '@apollo/client';
import SignInModal from './Modals/SignInModal';
import { maxWidth, minWidth } from '../style/responsive';
import CartModal from './Modals/CartModal';
import { useDispatch, useSelector } from '../store/authStore';
import { types } from '../types/types';
import { useCartSelector } from '../store/cart/cartStore';

const Container = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1;
  height: 80px;
  background: #fff;
  box-shadow: 0px 4px 16px rgb(43, 52, 69, 0.1);
  ${maxWidth(768, { top: '50px' })}
`;

const Wrapper = styled.div`
  padding: 16px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%auto;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;

  ${minWidth(1280, {
    maxWidth: '1280px',
  })}
  ${minWidth(768, {
    paddingLeft: '24px',
    paddingRight: '24px',
    marginTop: 0,
  })}
`;

const Left = styled.div`
  flex: 1;
  align-items: center;
  min-width: 170px;
  ${minWidth(0, { display: 'none' })}
  ${minWidth(768, { display: 'flex' })}
`;

const Logo = styled.h1`
  font-family: 'Lato';
  text-decoration: none;
  font-weight: 900;
  margin-top: 6px;
  font-size: 35px;
`;
const Center = styled.div`
  flex: 3;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  align-items: center;
  max-width: 580px;
  margin-left: auto;
  margin-right: auto;
  padding: 5px;
  display: inline-flex;
  flex-direction: column;
  position: relative;
  padding: 0;
  border: 0;
  vertical-align: top;
  width: 100%;
  & .inputWrapper {
    font-size: 14px;
    font-family: 'Open Sans';
    font-weight: 400;
    line-height: 1.4375em;
    color: #2b3445;
    box-sizing: border-box;
    cursor: text;
    display: inline-flex;
    align-items: center;
    width: 100%;
    height: 44px;
    border: 1px solid #c4c4c4;
    border-radius: 1200px;
    position: relative;
    padding-left: 14px;
    padding-right: 14px;
    height: 44px;
    padding-right: 0px;
    color: #4b566b;
    &:hover {
      border: 1px solid #d23f57;
    }
    & .dropdown button {
      height: 40.5px;

      background-color: #f6f9fc;
      border: none;
      z-index: -1;
      border-left: 1px solid #c4c4c4;
      color: #4b566b;
      padding: inherit 20px;
      border-top-right-radius: 1200px;
      border-bottom-right-radius: 1200px;
      font-size: 14px;

      &::after {
        margin-left: 15px;
        font-size: 16px;
        ${maxWidth(456, { marginLeft: '5px', fontSize: 13 })}
      }
      &:focus,
      &:active:focus {
        box-shadow: 0 0 0 0 rgb(49, 132, 253, 0.5);
        outline: 0;
      }
    }

    & .dropdown .dropdown-menu {
      padding: 0;
      .dropdownItems {
        margin: 0;
        font-size: 14px !important;
        color: rgb(43, 52, 69);
        padding: 10px 1rem;
        background-color: white;
        &:hover {
          background-color: rgba(0, 0, 0, 0.04);
        }
      }
    }
  }
  & .focusBorder {
    border: 2px solid #d23f57 !important;
  }
`;

const Input = styled.input`
  border: none;
  width: 100%;
  border: 0;
  box-sizing: content-box;
  background: none;
  height: 1.4375em;
`;

const Right = styled.div`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  & .dropdown-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    outline: 0;
    border: 0;
    margin: 0;
    cursor: pointer;
    flex: 0 0 auto;
    font-size: 1.5rem;
    user-select: none;
    vertical-align: middle;
    text-decoration: none;
    border-radius: 50%;
    overflow: visible;
    color: rgba(0, 0, 0, 0.54);
    margin-left: 16px;
    padding: 10px !important ;
    background-color: #f3f5f9;
    font-size: 14px;
    margin-left: 25px;
    ${maxWidth(380, { fontSize: '12px', marginLeft: '10px' })}
    &:hover {
      & svg {
        width: 1.05em;
        height: 1.05em;
      }
      box-shadow: rgba(3, 0, 71, 0.1) 0px 1px 3px;
    }
  }
  & .dropdown-toggle {
    padding: 0;
    color: rgba(0, 0, 0, 0.54);
    &::after {
      display: none;
    }
  }
  ${minWidth(0, { display: 'none' })}
  ${minWidth(768, { display: 'flex' })}

  & .dropdown-menu {
    padding: 0;
    max-width: 20px;
  }
  & .dropdown-item {
    padding: 0;
    padding: 0.72rem;
    color: #4b556b;

    transition: background-color 0.2s ease;
    &:hover {
      background-color: #1f51ff;
      color: white;
      font-weight: 600;
    }
  }
`;

const MenuItem = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  outline: 0;
  border: 0;
  margin: 0;
  cursor: pointer;
  flex: 0 0 auto;
  font-size: 1.5rem;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  border-radius: 50%;
  overflow: visible;
  color: rgba(0, 0, 0, 0.54);
  margin-left: 16px;
  padding: 10px;
  background-color: #f3f5f9;
  font-size: 14px;
  margin-left: 25px;
  ${maxWidth(380, { fontSize: '12px', marginLeft: '10px' })}
  &:hover {
    & svg {
      width: 1.05em;
      height: 1.05em;
    }
    box-shadow: rgba(3, 0, 71, 0.1) 0px 1px 3px;
  }
`;

/* const ImageProfile = styled.img`
  border-radius: 50%;
  height: 44px;
  width: 44px;
  text-align: center;
  object-fit: cover;
`; */
export const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [border, setBorder] = useState('');

  const client = useApolloClient();
  const [filterShow, setFilterShow] = useState(false);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const cartArray = useCartSelector((state) => state.cartItems);

  const handleFilterOpen = () => setFilterShow(true);

  const [shopCart, setShopCart] = useState(false);
  const handleShopCartOpen = () => setShopCart(true);

  const query = queryString.parse(location.search);
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target.search.value;

    if (text.length > 1)
      navigate(
        `/products/search?${queryString.stringify({ ...query, product: text.toLowerCase() })}`,
      );
  };
  const onSignOut = async () => {
    dispatch({ type: types.userSignout });
    await client.clearStore();
    client.cache.gc();
    navigate('/signin');
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link style={{ textDecoration: 'none', color: '#0f3460' }} to="/">
            <Logo>Phantom</Logo>
          </Link>
        </Left>
        <Center>
          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <SearchContainer>
              <div className={`inputWrapper ${border}`}>
                <Search style={{ fontSize: '1.25rem', color: '#7D879C', marginRight: '10px' }} />
                <Input
                  name="search"
                  onBlur={() => setBorder('')}
                  onFocus={() => setBorder('focusBorder')}
                  placeholder="Search"
                />
                <DropdownButton id="dropdown-item-button" title="Categories">
                  <Dropdown.Item
                    as="button"
                    className="dropdownItems"
                    onClick={() => navigate('/products/pc_case')}>
                    PC Case
                  </Dropdown.Item>
                  <Dropdown.Item
                    as="button"
                    className="dropdownItems"
                    onClick={() => navigate('/products/laptop')}>
                    Laptop
                  </Dropdown.Item>
                  <Dropdown.Item
                    as="button"
                    className="dropdownItems"
                    onClick={() => navigate('/products/monitor')}>
                    Monitors
                  </Dropdown.Item>
                  <Dropdown.Item
                    as="button"
                    className="dropdownItems"
                    onClick={() => navigate('/products/headphones')}>
                    Headphones
                  </Dropdown.Item>
                  <Dropdown.Item
                    as="button"
                    className="dropdownItems"
                    onClick={() => navigate('/products/graphics_card')}>
                    Graphics Card
                  </Dropdown.Item>
                </DropdownButton>
              </div>
            </SearchContainer>
          </form>
        </Center>
        <Right>
          <MenuItem id="shopCartButton" onClick={handleShopCartOpen} type="button">
            <Badge badgeContent={cartArray.length} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          {userData ? (
            <NavDropdown
              id="userDropdown"
              style={{ marginLeft: '25px' }}
              title={<PersonOutlineIcon />}>
              <NavDropdown.Item
                as={Link}
                className="dropItem"
                id="userProfile"
                to={userData.isAdmin ? `/admin/profile` : '/profile'}>
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item id="signOut" onClick={onSignOut}>
                Sign Out
              </NavDropdown.Item>
            </NavDropdown>
          ) : (
            <MenuItem id="userModal" onClick={handleFilterOpen} type="button">
              <PersonOutlineIcon />
            </MenuItem>
          )}
        </Right>
      </Wrapper>
      <SignInModal setShow={setFilterShow} show={filterShow} />
      <CartModal setShow={setShopCart} show={shopCart} />
    </Container>
  );
};
