const sendMessage = async ({
  message,
  chatId,
  idInstance,
  apiTokenInstance,
}) => {
  const shortIdInstance = String(idInstance).slice(0, 4);
  const url = `https://${shortIdInstance}.api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chatId: `${chatId}@c.us`,
        message,
      }),
    });

    return response.ok;
  } catch (error) {
    return false;
  }
};

export default sendMessage;
