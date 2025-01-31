import React from 'react';
import { getIn } from 'formik';
import * as St from '../../style';

const IdInstance = ({ form }) => (
  <St.AuthInput
    type="text"
    placeholder="idInstance"
    name="idInstance"
    value={getIn(form?.values, 'idInstance')}
    onChange={form.handleChange}
  />
);
export default IdInstance;
