import styled from 'styled-components';
import { Formik } from 'formik';

export const AuthPage = styled.div`
  display: flex;
  justify-content: center;
`;

export const AuthFormWrapper = styled(Formik)``;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 600px;
  width: 100%;
  padding: 20px;
  border: 1px solid #000000;
  border-radius: 10px;
  gap: 10px;
`;

export const AuthButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const AuthInput = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 3px;
`;
