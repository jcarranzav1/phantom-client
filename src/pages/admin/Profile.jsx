import React from 'react';
import styled from '@emotion/styled';
import { Col, Form, Row } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import Announcement from '../../components/Announcement';
import Footer from '../../components/Footer';
import { NavBar } from '../../components/NavBar';
import { Button } from '../../style/buttons';
import { PROFILE } from '../../apollo/user.querys';
import AdminProfile from '../../components/Profile/AdminProfile';

const BodyContainer = styled.div`
  background-color: #fff;
  color: #2b3445;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(3, 0, 71, 0.09);
  overflow: hidden;
  border-radius: 8px;
  padding: 24px 52px;
  height: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  margin-top: 16px;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 24px;
`;

const ProfileTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ProfileIcon = styled.svg`
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  flex-shrink: 0;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: 1.5rem;
  color: #d23f57;
`;

const ProfileTitle = styled.h2`
  margin-bottom: 0px;
  margin-top: 0px;
  font-size: 25px;
  font-weight: 700;
  line-height: 1;
  margin-left: 12px;
  text-transform: none;
  white-space: normal;
`;

const ImageProfile = styled.img`
  border-radius: 50%;
  height: 64px;
  width: 64px;
  text-align: center;
  object-fit: cover;
`;

const Label = styled.small`
  font-size: 15px;
  line-height: 1.5;
  display: block;
  margin-bottom: 12px;
  text-align: left;
  font-weight: 700;
  color: rgb(75, 86, 107);
  text-transform: none;
  white-space: normal;
`;
export default function Profile() {
  const { data } = useQuery(PROFILE);
  const navigate = useNavigate();
  const { firstName, lastName, cellphone, email, photo = null } = !!data && data.profile;

  return (
    <>
      <Announcement />
      <NavBar />
      <AdminProfile>
        <BodyContainer>
          <TitleContainer>
            <ProfileTitleContainer>
              <ProfileIcon>
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </ProfileIcon>
              <ProfileTitle>My Profile</ProfileTitle>
            </ProfileTitleContainer>

            <ImageProfile
              src={
                photo || 'https://erasmuscoursescroatia.com/wp-content/uploads/2015/11/no-user.jpg'
              }
            />
          </TitleContainer>
          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formGridFirstName" sm={6}>
              <Label>First Name</Label>
              <Form.Control name="firstName" placeholder={firstName} type="text" disabled />
            </Form.Group>

            <Form.Group as={Col} className="mb-3" controlId="formGridPassword" sm={6}>
              <Label>Last Name</Label>
              <Form.Control placeholder={lastName} type="text" disabled />
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formGridFirstEmail" sm={6}>
              <Label>Email</Label>
              <Form.Control name="firstName" placeholder={email} type="email" disabled />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="formGridFirstCell" sm={6}>
              <Label>Cell Phone</Label>
              <Form.Control name="firstName" placeholder={cellphone} type="text" disabled />
            </Form.Group>
          </Row>

          <div style={{ width: '100%', textAlign: 'center', marginTop: '50px' }}>
            <Button onClick={() => navigate('/admin/updateProfile')}>Edit Profile</Button>
          </div>
        </BodyContainer>
      </AdminProfile>

      <Footer />
    </>
  );
}
