import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import sendMessage from '../../../../../requests/sendMessage';
import { ContextChatId } from '../../../Providers/ChatIdProvider';
import { ContextAuth } from '../../../../../Router/AuthProvider';

const useForm = () => {
  const { update } = useContext(ContextChatId);
  const { id: idInstance, token: apiTokenInstance } = useContext(ContextAuth);

  const { id } = useParams();

  const formik = {
    initialValues: {
      message: '',
    },
    onSubmit: async ({ message }, { resetForm }) => {
      if (message.trim() === '') return;

      const result = sendMessage({
        message,
        chatId: id,
        idInstance,
        apiTokenInstance,
      });

      if (result) {
        update({ value: message, isMyMessage: true });
        resetForm();
      } else {
        alert('Ошибка');
      }
    },
  };

  return { formik };
};

export default useForm;
