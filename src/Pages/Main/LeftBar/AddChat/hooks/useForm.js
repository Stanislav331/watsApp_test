import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ContextChats } from '../../../Providers/ChatsProvider';

const useForm = () => {
  const { update, chats } = useContext(ContextChats);

  const navigate = useNavigate();

  const formik = {
    initialValues: {
      phoneNumber: '',
    },
    onSubmit: ({ phoneNumber }, { resetForm }) => {
      if (phoneNumber.trim() === '') return;

      update([...(chats || []), phoneNumber]);

      navigate(`/main/${phoneNumber}`);

      resetForm();
    },
  };

  return { formik };
};

export default useForm;
