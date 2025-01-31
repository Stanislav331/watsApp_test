import { useContext } from 'react';
import Item from './Item';
import { useParams } from 'react-router-dom';
import { ContextChats } from '../../Providers/ChatsProvider';
import * as St from './style';

const ListItems = () => {
  const { id } = useParams();
  const { chats } = useContext(ContextChats);

  return (
    <St.ListItems>
      {chats?.map((phoneNumber, index) => (
        <Item active={phoneNumber === id} key={index} chatId={phoneNumber} />
      ))}
    </St.ListItems>
  );
};

export default ListItems;
