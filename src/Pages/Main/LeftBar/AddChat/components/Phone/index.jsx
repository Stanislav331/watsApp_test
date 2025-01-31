import React from 'react';
import { getIn } from 'formik';
import * as St from './style';

const Phone = ({ form }) => (
  <St.Input
    type="tel"
    placeholder="Поиск"
    name="phoneNumber"
    value={getIn(form?.values, 'phoneNumber')}
    onChange={form.handleChange}
  />
);

export default Phone;
