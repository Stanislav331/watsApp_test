import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ChatItem = styled(Link)`
  padding: 20px;
  font-size: 22px;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  background-color: ${({ active }) => active && '#f0f0f0'};
  text-decoration: none;
  color: inherit;
  &:hover {
    background-color: #f0f0f0;
  }
`;
