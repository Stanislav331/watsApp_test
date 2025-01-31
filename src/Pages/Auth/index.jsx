import useForm from './hooks/useForm';
import ApiTokenInstance from './components/ApiTokenInstance';
import IdInstance from './components/IdInstance';
import { FastField } from 'formik';
import { ContextAuth } from '../../Router/AuthProvider';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import * as St from './style';

const AuthPage = () => {
  const { formik } = useForm();

  const { id: idInstance, token: apiTokenInstance } = useContext(ContextAuth);

  if (idInstance && apiTokenInstance) return <Navigate to={'/main'} />;

  return (
    <St.AuthPage>
      <St.AuthFormWrapper
        initialValues={formik.initialValues}
        onSubmit={formik.onSubmit}
      >
        {(props) => (
          <St.AuthForm onSubmit={props.handleSubmit}>
            <FastField name="idInstance" component={IdInstance} />
            <FastField name="apiTokenInstance" component={ApiTokenInstance} />
            <St.AuthButton disabled={props?.isSubmitting} type="submit">
              Войти
            </St.AuthButton>
          </St.AuthForm>
        )}
      </St.AuthFormWrapper>
    </St.AuthPage>
  );
};

export default AuthPage;
