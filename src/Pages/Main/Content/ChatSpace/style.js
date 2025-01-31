import styled from 'styled-components';

export const ChatSpace = styled.div`
  background-color: #efeae2;
  display: flex;
  overflow-y: auto;
  flex-direction: column;
  gap: 5px;
  height: 100%;
  padding: 25px;
`;

export const Message = styled.div`
  width: max-content;
  height: max-content;
  padding: 20px;
  display: flex;
  max-width: 60%;
  border-radius: 10px;
  background-color: ${({ ismymessage }) => (ismymessage ? '#d9fdd3' : '#fff')};
  margin-left: ${({ ismymessage }) => (ismymessage ? 'auto' : '')};
`;
