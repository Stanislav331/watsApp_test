import styled from 'styled-components';
import { Formik } from 'formik';

export const AddChat = styled.div`
  display: flex;
  justify-content: center;
`;

export const AuthFormWrapper = styled(Formik)``;

export const AuthForm = styled.form`
  display: flex;
  box-sizing: border-box;
  padding: 10px;
  gap: 10px;
  width: 100%;
`;

export const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    background-color: #0056b3;
  }
`;
