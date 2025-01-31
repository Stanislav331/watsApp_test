import { useContext, useEffect, useState } from 'react';
import getMessages from '../../../../../requests/getMessages';
import { ContextAuth } from '../../../../../Router/AuthProvider';

const getValueAfterLastSlash = (url) =>
  url.slice(url.lastIndexOf('/') + 1) || null;

const useDistributionMessages = ({ updateContextValue }) => {
  const { id: idInstance, token: apiTokenInstance } = useContext(ContextAuth);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    if (loading) return;

    setLoading(true);
    try {
      const data = await getMessages({ idInstance, apiTokenInstance });
      if (
        !data ||
        data?.typeWebhook !== 'incomingMessageReceived' ||
        data === false
      )
        return;

      const chatId = data?.senderData?.chatId?.split('@')[0];
      const message = data?.messageData?.textMessageData?.textMessage;
      const res = { value: message, isMyMessage: false };

      const currentId = getValueAfterLastSlash(window?.location?.href);

      console.log(data);
      console.log('chatId === currentId', chatId, currentId);

      if (chatId === currentId) {
        updateContextValue(res);
      } else {
        const instance = `chat-${chatId}`;
        const oldValue = JSON.parse(localStorage.getItem(instance) || '[]');
        localStorage.setItem(instance, JSON.stringify([...oldValue, res]));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const intervalId = setInterval(request, 1000);
    return () => clearInterval(intervalId);
  }, [request]);
};

export default useDistributionMessages;
