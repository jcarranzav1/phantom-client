import { useMutation } from '@apollo/client';
import styled from '@emotion/styled';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { PropagateLoader } from 'react-spinners';
import { SINGUP } from '../../apollo/user.querys';
import Announcement from '../../components/Announcement';
import Footer from '../../components/Footer';
import { NavBar } from '../../components/NavBar';
import AdminProfile from '../../components/Profile/AdminProfile';
import { SingUpSchema } from '../../schemas/formSchemas';
import { Button } from '../../style/buttons';
import {
  ErrorMessage,
  EyeButton,
  FormControl,
  InputForm,
  InputWrapper,
  LabelForm,
} from '../../style/forms';

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

export default function NewAdmin() {
  const [loading, setLoading] = useState(false);
  const [border, setBorder] = useState({
    border1: '',
    border2: '',
    border3: '',
    border4: '',
    border5: '',
    border6: '',
  });
  const { border1, border2, border3, border4, border5, border6 } = border;
  const [showEye, setShowEye] = useState({ eye1: false, eye2: false });
  const { eye1, eye2 } = showEye;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SingUpSchema),
    defaultValues: {
      confirmPassword: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    },
  });

  const [mutateFunction, { error }] = useMutation(SINGUP);

  async function OnSubmit(dataForm) {
    setLoading(true);
    try {
      await mutateFunction({ variables: { input: { ...dataForm, isAdmin: true } } });
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }
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
              <ProfileTitle>Create Admin Account</ProfileTitle>
            </ProfileTitleContainer>
          </TitleContainer>
          <Form onSubmit={handleSubmit(OnSubmit)} style={{ opacity: loading ? '0.6' : '1' }}>
            <Row>
              <Form.Group as={Col} className="mb-3" controlId="formGridFirstName" sm={6}>
                <LabelForm>First Name</LabelForm>
                <FormControl>
                  <InputWrapper className={`${border1}`}>
                    <InputForm
                      {...register('firstName')}
                      name="firstName"
                      onBlur={() => setBorder({ ...border, border1: '' })}
                      onFocus={() => setBorder({ ...border, border1: 'focusBorder' })}
                      placeholder="First Name"
                      type="text"
                    />
                  </InputWrapper>
                  <ErrorMessage className="my-0 mt-2 ">{errors.firstName?.message}</ErrorMessage>
                </FormControl>
              </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="formGridPassword" sm={6}>
                <LabelForm>Last Name</LabelForm>
                <FormControl>
                  <InputWrapper className={`${border2}`}>
                    <InputForm
                      {...register('lastName')}
                      name="lastName"
                      onBlur={() => setBorder({ ...border, border2: '' })}
                      onFocus={() => setBorder({ ...border, border2: 'focusBorder' })}
                      placeholder="Last Name"
                      type="text"
                    />
                  </InputWrapper>
                  <ErrorMessage className="my-0 mt-2 ">{errors.lastName?.message}</ErrorMessage>
                </FormControl>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className="mb-3" controlId="formGridFirstCell" sm={6}>
                <LabelForm>Last Name</LabelForm>
                <FormControl>
                  <InputWrapper className={`${border3}`}>
                    <InputForm
                      name="cellphone"
                      onBlur={() => setBorder({ ...border, border3: '' })}
                      onFocus={() => setBorder({ ...border, border3: 'focusBorder' })}
                      placeholder="Cellphone"
                      type="number"
                    />
                  </InputWrapper>
                  <ErrorMessage className="my-0 mt-2 ">{errors.lastName?.message}</ErrorMessage>
                </FormControl>
              </Form.Group>

              <Form.Group as={Col} className="mb-3" controlId="formGridFirstCell" sm={6}>
                <LabelForm>Email</LabelForm>
                <FormControl>
                  <InputWrapper className={`${border4}`}>
                    <InputForm
                      {...register('email')}
                      name="email"
                      onBlur={() => setBorder({ ...border, border4: '' })}
                      onFocus={() => setBorder({ ...border, border4: 'focusBorder' })}
                      placeholder="Email"
                      type="text"
                    />
                  </InputWrapper>
                  <ErrorMessage className="my-0 mt-2 ">{errors.email?.message}</ErrorMessage>
                  {error && (
                    <ErrorMessage className="my-0 mt-2 ">
                      Ya estas registrado con este correo
                    </ErrorMessage>
                  )}
                </FormControl>
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
                <LabelForm>Password</LabelForm>
                <FormControl>
                  <InputWrapper className={`${border5} pe-3`}>
                    <InputForm
                      {...register('password')}
                      name="password"
                      onBlur={() => setBorder({ ...border, border5: '' })}
                      onFocus={() => setBorder({ ...border, border5: 'focusBorder' })}
                      placeholder="Password"
                      type={eye1 ? 'text' : 'password'}
                    />

                    <EyeButton
                      onClick={() => setShowEye({ ...showEye, eye1: !eye1 })}
                      style={{ color: !eye1 && 'rgb(218, 225, 231)' }}
                      type="button">
                      <svg
                        aria-hidden="true"
                        data-testid="VisibilityOffIcon"
                        focusable="false"
                        style={{
                          width: '1em',
                          height: '1em',
                          display: 'inline-block',
                          fill: 'currentcolor',
                          flexShrink: 0,
                          transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                          fontSize: '1.25rem',
                        }}
                        viewBox="0 0 24 24">
                        {eye1 ? (
                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                        ) : (
                          <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
                        )}
                      </svg>
                    </EyeButton>
                  </InputWrapper>
                  <ErrorMessage className="my-0 mt-2 pe-3">{errors.password?.message}</ErrorMessage>
                </FormControl>
              </Form.Group>
              <Form.Group as={Col} className="mb-3" controlId="formGridFirstCell" sm={6}>
                <LabelForm>Confirm Password</LabelForm>
                <FormControl>
                  <InputWrapper className={`${border6} pe-3`}>
                    <InputForm
                      {...register('confirmPassword')}
                      name="confirmPassword"
                      onBlur={() => setBorder({ ...border, border6: '' })}
                      onFocus={() => setBorder({ ...border, border6: 'focusBorder' })}
                      placeholder="Confirm Password"
                      type={eye2 ? 'text' : 'password'}
                    />
                    <EyeButton
                      onClick={() => setShowEye({ ...showEye, eye2: !eye2 })}
                      style={{ color: !eye2 && 'rgb(218, 225, 231)' }}
                      type="button">
                      <svg
                        aria-hidden="true"
                        data-testid="VisibilityOffIcon"
                        focusable="false"
                        style={{
                          width: '1em',
                          height: '1em',
                          display: 'inline-block',
                          fill: 'currentcolor',
                          flexShrink: 0,
                          transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                          fontSize: '1.25rem',
                        }}
                        viewBox="0 0 24 24">
                        {eye2 ? (
                          <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                        ) : (
                          <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
                        )}
                      </svg>
                    </EyeButton>
                  </InputWrapper>
                  <ErrorMessage className="my-0 mt-2 pe-3">
                    {errors.confirmPassword?.message}
                  </ErrorMessage>
                </FormControl>
              </Form.Group>
            </Row>

            <div
              style={{
                width: '100%',
                textAlign: 'center',
                marginTop: '60px',
              }}>
              <Button type="submit">Create Account</Button>
            </div>
          </Form>
        </BodyContainer>
      </AdminProfile>
      <Footer />
    </>
  );
}
