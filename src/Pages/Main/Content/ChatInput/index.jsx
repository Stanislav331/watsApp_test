import React from 'react';
import useForm from './hooks/useForm';
import { FastField } from 'formik';
import Message from './components/Message';
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
            <FastField name="message" component={Message} />
            <St.Button type="submit">+</St.Button>
          </St.AuthForm>
        )}
      </St.AuthFormWrapper>
    </St.AddChat>
  );
};

export default AddChat;
