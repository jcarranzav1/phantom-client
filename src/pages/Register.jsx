import { useMutation } from '@apollo/client';
import styled from '@emotion/styled';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { SINGUP } from '../apollo/user.querys';
import { SingUpSchema } from '../schemas/formSchemas';
import { Button } from '../style/buttons';
import {
  AccountOption,
  AccountOptionContainer,
  ErrorMessage,
  EyeButton,
  FormControl,
  FormSubtitle,
  FormTitle,
  InputForm,
  InputWrapper,
  LabelForm,
} from '../style/forms';
import { maxWidth } from '../style/responsive';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  background-color: #f6f9fc;
  justify-content: center;
`;
const Wrapper = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(43, 52, 69);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: rgba(3, 0, 71, 0.09) 0px 8px 45px;
  overflow: hidden;
  border-radius: 8px;
  width: 500px;
  ${maxWidth(550, {
    maxWidth: '500px',
    width: 'auto',
  })}
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  ${maxWidth(550, {
    flexDirection: 'column',
    gap: '0px',
  })}
`;
export default function Register() {
  const navigate = useNavigate();
  const [border, setBorder] = useState({
    border1: '',
    border2: '',
    border3: '',
    border4: '',
    border5: '',
  });
  const { border1, border2, border3, border4, border5 } = border;
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
  const [mutateFunction, { data, error }] = useMutation(SINGUP);
  useEffect(() => {
    if (data) {
      navigate('/signin');
    }
  }, [data, navigate]);

  async function OnSubmit(dataForm) {
    await mutateFunction({ variables: { input: dataForm } });
  }
  return (
    <Container>
      <Wrapper>
        <Form
          onSubmit={handleSubmit(OnSubmit)}
          style={{ textAlign: 'center', padding: '3rem 3.75rem 2rem' }}>
          <FormTitle>Create Your Account</FormTitle>
          <FormSubtitle>Please fill all fields to continue</FormSubtitle>
          <div className="mb-4">
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
          </div>
          <div className="mb-4">
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
          </div>
          <div className="mb-4">
            <LabelForm>Email</LabelForm>
            <FormControl>
              <InputWrapper className={`${border3}`}>
                <InputForm
                  {...register('email')}
                  name="email"
                  onBlur={() => setBorder({ ...border, border3: '' })}
                  onFocus={() => setBorder({ ...border, border3: 'focusBorder' })}
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
          </div>
          <div className="mb-4">
            <LabelForm>Password</LabelForm>
            <FormControl>
              <InputWrapper className={`${border4} pe-3`}>
                <InputForm
                  {...register('password')}
                  name="password"
                  onBlur={() => setBorder({ ...border, border4: '' })}
                  onFocus={() => setBorder({ ...border, border4: 'focusBorder' })}
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
          </div>
          <div className="mb-4">
            <LabelForm>Confirm Password</LabelForm>
            <FormControl>
              <InputWrapper className={`${border5} pe-3`}>
                <InputForm
                  {...register('confirmPassword')}
                  name="confirmPassword"
                  onBlur={() => setBorder({ ...border, border5: '' })}
                  onFocus={() => setBorder({ ...border, border5: 'focusBorder' })}
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
          </div>
          <ButtonsContainer>
            <Button id="createAccount" type="submit" large>
              Create Account
            </Button>
            <Button id="returnHome" onClick={() => navigate('/')} type="button" large>
              Return Home
            </Button>
          </ButtonsContainer>

          <AccountOptionContainer>
            <div>You have account?</div>
            <Link to="/signin">
              <AccountOption>Sign In</AccountOption>
            </Link>
          </AccountOptionContainer>
        </Form>
      </Wrapper>
    </Container>
  );
}
