const scrollChatSpaceToBottom = () => {
  setTimeout(() => {
    const container = document.getElementById('chat-container');
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, 1);
};

export default scrollChatSpaceToBottom;
