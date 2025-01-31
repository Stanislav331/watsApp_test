import React from 'react';
import { getIn } from 'formik';
import * as St from '../../style';

const ApiTokenInstance = ({ form }) => (
  <St.AuthInput
    type="text"
    placeholder="ApiTokenInstance"
    name="apiTokenInstance"
    value={getIn(form?.values, 'apiTokenInstance')}
    onChange={form.handleChange}
  />
);

export default ApiTokenInstance;
