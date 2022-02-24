import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Col, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { PropagateLoader } from 'react-spinners';
import Announcement from '../../components/Announcement';
import Footer from '../../components/Footer';
import { NavBar } from '../../components/NavBar';
import { Button } from '../../style/buttons';
import { UDPATE_PROFILE } from '../../apollo/user.querys';
import { useDispatch, useSelector } from '../../store/authStore';
import { types } from '../../types/types';
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
  & input::-webkit-outer-spin-button,
  & input::-webkit-inner-spin-button {
    /* display: none; <- Crashes Chrome on hover */
    -webkit-appearance: none;
    margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
  }
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
export default function UpdateProfile() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const [mutateFunction, { data, error }] = useMutation(UDPATE_PROFILE);
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState();
  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    cellphone: '',
  });
  const { firstName, lastName, cellphone } = inputs;

  const fileHandler = ({ target }) => {
    const file = target.files[0];
    setPhoto(file);
  };
  const handleInputChange = ({ target }) => {
    setInputs({ ...inputs, [target.name]: target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = {};

    if (firstName) formData.firstName = firstName;
    if (lastName) formData.lastName = lastName;
    if (cellphone) formData.cellphone = cellphone;
    if (photo) formData.photo = photo;

    await mutateFunction({
      variables: {
        input: formData,
      },
    });
  };
  useEffect(() => {
    if (error) setLoading(false);
  }, [error]);

  useEffect(() => {
    if (data) {
      setLoading(false);
      const action = {
        type: types.update,
        payload: data.updateProfile,
      };
      dispatch(action);
      setLoading(false);
      navigate('/admin/profile');
    }
  }, [data, dispatch, navigate]);

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
              <ProfileTitle>Update Profile</ProfileTitle>
            </ProfileTitleContainer>

            <ImageProfile
              src={
                user.photo ||
                'https://erasmuscoursescroatia.com/wp-content/uploads/2015/11/no-user.jpg'
              }
            />
          </TitleContainer>
          <Form onSubmit={handleSubmit} style={{ opacity: loading ? '0.6' : '1' }}>
            <Row>
              <Form.Group as={Col} className="mb-3" controlId="formGridFirstName" sm={6}>
                <Label>First Name</Label>
                <Form.Control name="firstName" onChange={handleInputChange} type="text" />
              </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="formGridPassword" sm={6}>
                <Label>Last Name</Label>
                <Form.Control name="lastName" onChange={handleInputChange} type="text" />
              </Form.Group>
            </Row>
            <div
              style={{
                width: '100%',
                textAlign: 'center',
              }}>
              <PropagateLoader
                color="#1373e5"
                loading={loading}
                size={25}
                style={{ marginTop: '6000px', marginLeft: '500px' }}
              />
            </div>
            <Row>
              <Form.Group as={Col} className="mb-3" controlId="formGridFirstCell" sm={6}>
                <Label>Cell Phone</Label>
                <Form.Control name="cellphone" onChange={handleInputChange} type="number" />
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="photo" sm={6}>
                <Label>Upload your photo profile</Label>
                <Form.Control accept=".jpg,.jpeg,.png" onChange={fileHandler} type="file" />
              </Form.Group>
            </Row>
            <div
              style={{
                width: '100%',
                textAlign: 'center',
                marginTop: '60px',
              }}>
              <Button type="submit" outline>
                Update Profile
              </Button>
            </div>
          </Form>
        </BodyContainer>
      </AdminProfile>

      <Footer />
    </>
  );
}
