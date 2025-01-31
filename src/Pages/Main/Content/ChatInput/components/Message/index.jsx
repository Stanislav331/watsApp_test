import React from 'react';
import { getIn } from 'formik';
import * as St from './style';

const Message = ({ form }) => (
  <St.Input
    type="text"
    placeholder="Введите сообщение"
    name="message"
    value={getIn(form?.values, 'message')}
    onChange={form.handleChange}
  />
);

export default Message;
