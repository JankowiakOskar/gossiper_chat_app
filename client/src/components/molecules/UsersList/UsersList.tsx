import { SocketUser } from 'utils/types/types';
import { ReactComponent as ChatPersonIcon } from 'assets/svgs/person-chat.svg';
import { Color } from 'utils/types/enums';
import { ListWrapper, ListHead, ListName, List, ListElement, IconWrapper, StyledCircle } from './UsersListStyle';

type Props = {
  usersList: SocketUser[];
};

const UsersList = ({ usersList }: Props) => (
  <ListWrapper>
    <ListHead>
      <ListName>Active users</ListName>
      <IconWrapper>
        <ChatPersonIcon />
        <StyledCircle numInside={usersList.length} color={Color.LightBlue} />
      </IconWrapper>
    </ListHead>
    <List>
      {usersList.map(({ user, socketId }) => (
        <ListElement key={socketId}>{user}</ListElement>
      ))}
    </List>
  </ListWrapper>
);

export default UsersList;
