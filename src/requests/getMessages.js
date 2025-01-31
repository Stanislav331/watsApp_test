const getMessages = async ({ idInstance, apiTokenInstance }) => {
  const shortIdInstance = String(idInstance).slice(0, 4);
  const urlGet = `https://${shortIdInstance}.api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`;

  try {
    const response = await fetch(urlGet, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const getResponse = await response.json();

    if (!getResponse?.receiptId) return null;

    const { receiptId, body } = getResponse;

    const urlDelete = `https://${shortIdInstance}.api.green-api.com/waInstance${idInstance}/deleteNotification/${apiTokenInstance}/${receiptId}`;

    const responseDelete = await fetch(urlDelete, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        receiptId,
      }),
    });

    if (responseDelete.ok) return body;
  } catch (error) {
    return false;
  }
};

export default getMessages;
