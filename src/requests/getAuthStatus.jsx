/**
 * Это функция проверяет что IdInstance и Phone в моковом запросе выдает 200ку
 *
 * @returns boolean
 **/

const checkStatus = async ({ idInstance, apiTokenInstance }) => {
  const shortIdInstance = String(idInstance).slice(0, 4);
  const url = `https://${shortIdInstance}.api.green-api.com/waInstance${idInstance}/receiveNotification/${apiTokenInstance}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.ok;
  } catch (error) {
    return false;
  }
};

export default checkStatus;
