import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useState } from 'react';
import { maxWidth, minWidth } from '../style/responsive';
import SignInModal from './Modals/SignInModal';

const Container = styled.div`
  background: #0f3460;
  color: #fff;
  height: 40px;
  font-size: 12px;
  padding: 25px 0;
  ${maxWidth(768, { position: 'sticky', width: '100%', zIndex: '2', top: '0' })}
`;
const Wrapper = styled.div`
  width: 100%;
  margin-left: auto;
  box-sizing: border-box;
  margin-right: auto;
  display: block;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  ${minWidth(600, {
    paddingLeft: '24px',
    paddingRight: '24px;',
  })}
`;

const Items = styled.div`
  align-items: center;
  display: none;
  display: flex;
`;

const Item = styled.div`
  display: none;
  align-items: center;
  ${minWidth(768, {
    display: 'inline-flex',
  })}
`;

const Logo = styled.h1`
  font-family: 'Lato';
  text-decoration: none;
  font-weight: 900;
  margin-top: 6px;
  font-size: 25px;
  color: white;
  display: none;
  ${maxWidth(768, { display: 'block', marginLeft: '25px' })}
`;

const Svg = styled.svg`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 1.25rem;
`;

const Links = styled.p`
  padding-right: 30px;
  color: #fff;
  margin-bottom: 0;
  ${maxWidth(768, {
    display: 'none',
  })}
`;
const MenuWrapper = styled.div`
  margin-right: 25px;
  ${minWidth(768, {
    display: 'none',
  })}
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
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  border-radius: 50%;
  overflow: visible;
  color: rgba(255, 255, 255, 0.9);
  background-color: transparent;
  margin-left: 25px;
  ${maxWidth(380, { fontSize: '12px', marginLeft: '10px' })}
`;

export default function Announcement() {
  const [filterShow, setFilterShow] = useState(false);
  const handleFilterOpen = () => setFilterShow(true);
  return (
    <Container>
      <Wrapper>
        <Items>
          <Logo>Phantom</Logo>
          <Item>
            <Svg
              aria-hidden="true"
              data-testid="SearchOutlinedIcon"
              focusable="false"
              viewBox="0 0 24 24">
              {/* eslint-disable-next-line max-len */}
              <path d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z" />
            </Svg>
            <span className="ms-2">(044) 606-200</span>
          </Item>
          <Item className="ms-4">
            <Svg
              aria-hidden="true"
              data-testid="SearchOutlinedIcon"
              focusable="false"
              viewBox="0 0 24 24">
              {/* eslint-disable-next-line max-len */}
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z" />{' '}
            </Svg>
            <span className="ms-2">dkart@gmail.com</span>
          </Item>
        </Items>
        <Items>
          <Link to="/">
            <Links>Theme FAQ&apos;s</Links>
          </Link>
          <Link to="/">
            <Links>Need Help?</Links>
          </Link>
          <MenuWrapper>
            <MenuItem onClick={handleFilterOpen} type="button">
              <PersonOutlineIcon />
            </MenuItem>
            <MenuItem type="button">
              <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </MenuWrapper>
        </Items>
      </Wrapper>
      <SignInModal setShow={setFilterShow} show={filterShow} />
    </Container>
  );
}
