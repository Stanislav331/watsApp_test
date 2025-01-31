import React from 'react';
import useForm from './hooks/useForm';
import { FastField } from 'formik';
import Phone from './components/Phone';
import * as St from './style';

const AddChat = () => {
  const { formik } = useForm();

  return (
    <St.AddChat>
      <St.AuthFormWrapper
        initialValues={formik.initialValues}
        onSubmit={formik.onSubmit}
      >
        {(props) => (
          <St.AuthForm onSubmit={props.handleSubmit}>
            <FastField name="phoneNumber" component={Phone} />
            <St.Button type="submit">+</St.Button>
          </St.AuthForm>
        )}
      </St.AuthFormWrapper>
    </St.AddChat>
  );
};

export default AddChat;
