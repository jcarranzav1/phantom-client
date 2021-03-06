import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { SingInSchema } from '../../schemas/formSchemas';
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
} from '../../style/forms';
import { Button } from '../../style/buttons';
import { LOGIN } from '../../apollo/user.querys';
import { useDispatch } from '../../store/authStore';
import { types } from '../../types/types';

const SignInModal = ({ show, setShow }) => {
  const [mutateFunction, { data, error }] = useMutation(LOGIN);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [border, setBorder] = useState({ border1: '', border2: '' });
  const [showEye, setShowEye] = useState(false);
  const { border1, border2 } = border;
  const handleClose = () => setShow(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SingInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    if (data) {
      const action = {
        type: types.userSignin,
        payload: data.loginUser,
      };
      dispatch(action);
      navigate('/');
      setShow(false);
    }
  }, [data, dispatch, navigate, setShow]);

  async function OnSubmit(dataForm) {
    await mutateFunction({ variables: { input: dataForm } });
  }
  return (
    <Modal onHide={handleClose} show={show} centered>
      <Form
        onSubmit={handleSubmit(OnSubmit)}
        style={{ textAlign: 'center', padding: '3rem 3.75rem 2rem' }}>
        <FormTitle>Welcome To Phantom</FormTitle>
        <FormSubtitle>Log in with email & password</FormSubtitle>
        <div className="mb-4">
          <LabelForm>Email</LabelForm>
          <FormControl>
            <InputWrapper className={`${border1}`}>
              <InputForm
                {...register('email')}
                name="email"
                onBlur={() => setBorder({ ...border, border1: '' })}
                onFocus={() => setBorder({ ...border, border1: 'focusBorder' })}
                placeholder="exmple@mail.com"
                type="text"
              />
            </InputWrapper>
            <ErrorMessage className="my-0 mt-2 ">{errors.email?.message}</ErrorMessage>
            {error && (
              <ErrorMessage className="my-0 mt-2 ">Error en el email o contrase??a</ErrorMessage>
            )}
          </FormControl>
        </div>
        <div className="mb-4">
          <LabelForm>Password</LabelForm>
          <FormControl>
            <InputWrapper className={`${border2} pe-3`}>
              <InputForm
                {...register('password')}
                autocomplete="off"
                name="password"
                onBlur={() => setBorder({ ...border, border2: '' })}
                onFocus={() => setBorder({ ...border, border2: 'focusBorder' })}
                placeholder="**********"
                type={showEye ? 'text' : 'password'}
              />
              <EyeButton
                onClick={() => setShowEye(!showEye)}
                style={{ color: !showEye && 'rgb(218, 225, 231)' }}
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
                  {showEye ? (
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  ) : (
                    <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />
                  )}
                </svg>
              </EyeButton>
            </InputWrapper>
            <ErrorMessage className="my-0 mt-2">{errors.password?.message}</ErrorMessage>
            {error && (
              <ErrorMessage className="my-0 mt-2 ">Error en el email o contrase??a</ErrorMessage>
            )}
          </FormControl>
        </div>
        <Button id="loginUser" type="submit" large>
          Login
        </Button>
        <AccountOptionContainer>
          <div>Don&apos;t have account?</div>
          <Link to="/signup">
            <AccountOption>Sign Up</AccountOption>
          </Link>
        </AccountOptionContainer>
      </Form>
    </Modal>
  );
};
export default SignInModal;
