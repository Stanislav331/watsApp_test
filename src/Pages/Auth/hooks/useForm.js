import checkStatus from '../../../requests/getAuthStatus';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ContextAuth } from '../../../Router/AuthProvider';

const useForm = () => {
  const { update } = useContext(ContextAuth);
  const navigate = useNavigate();

  const formik = {
    initialValues: {
      idInstance: '',
      apiTokenInstance: '',
    },
    onSubmit: async ({ idInstance, apiTokenInstance }) => {
      const isAuthenticated = await checkStatus({
        idInstance,
        apiTokenInstance,
      });

      if (isAuthenticated) {
        update({ id: idInstance, token: apiTokenInstance });

        navigate('/main');
      } else {
        alert('Несуществующий токен или id');
      }
    },
  };

  return { formik };
};

export default useForm;
