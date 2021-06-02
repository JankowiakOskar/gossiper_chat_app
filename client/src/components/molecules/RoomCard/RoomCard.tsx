import { useContext, forwardRef } from 'react';
import { ThemeContext } from 'styled-components';
import { Color } from 'utils/types/enums';
import { ChatRoom } from 'features/chatRooms/types';
import { AnimatePresence } from 'framer-motion';
import useAccessToRoom from 'hooks/useAccessToRoom';
import { ReactComponent as ClosedPadlockIcon } from 'assets/svgs/closed-padlock.svg';
import { ReactComponent as OpenedPadlockIcon } from 'assets/svgs/opened-padlock.svg';
import { ReactComponent as ChatPersonIcon } from 'assets/svgs/person-chat.svg';
import Tags from 'components/molecules/Tags/Tags';
import {
  Wrapper,
  RoomTitle,
  RoomDescriptions,
  Description,
  StyledButton,
  RoomDownBar,
  ChatIcon,
  SpanText,
  Text,
  IconActiveUsersWrapper,
  IconsWrapper,
  StyledCircle,
} from './RoomCardStyles';

const roomCardVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? -50 : 50,
  }),
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.3,
      ease: [0.45, 0.03, 0.2, -0.01],
    },
  }),
};

const expandedVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'linear',
      duration: 0.2,
    },
  },
};

type RoomCardProps = Omit<ChatRoom, 'users' | 'messages'> & {
  activeUsers: number;
  index?: number;
  className?: string;
  handleCB?: () => any;
  isExpanded: boolean;
};

const RoomCard = forwardRef<HTMLDivElement, RoomCardProps>(
  ({ index, id, name, description, activeUsers, tags, isPrivate, className = '', handleCB, isExpanded }, ref) => {
    const themeContext = useContext(ThemeContext);
    const { getIntoRoom } = useAccessToRoom({ id, isPrivate });

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.stopPropagation();
      getIntoRoom();
    };

    return (
      <Wrapper
        ref={ref}
        isExpanded={isExpanded}
        layoutId={name}
        className={className}
        custom={index}
        variants={!isExpanded ? roomCardVariants : expandedVariants}
        initial='hidden'
        animate='visible'
        onClick={handleCB && handleCB}
      >
        <RoomTitle>{name}</RoomTitle>
        <RoomDescriptions>
          <Description>
            <SpanText>Description:</SpanText> <Text>{description}</Text>
          </Description>
          <AnimatePresence exitBeforeEnter initial={false}>
            {isExpanded && (
              <Description>
                <SpanText>Tags:</SpanText>
                <Tags tags={tags} />
              </Description>
            )}
          </AnimatePresence>
        </RoomDescriptions>
        <RoomDownBar>
          <IconsWrapper>
            {isPrivate ? <ClosedPadlockIcon /> : <OpenedPadlockIcon />}
            <IconActiveUsersWrapper data-for='activeUsers' data-tip={`Active users in ${name}`}>
              <ChatPersonIcon stroke={themeContext.colors.darkBlue} />
              <StyledCircle numInside={activeUsers} bgColor={Color.LightGreen} />
            </IconActiveUsersWrapper>
          </IconsWrapper>
          <StyledButton color={Color.LightBlue} onClick={handleClick}>
            Join <ChatIcon />
          </StyledButton>
        </RoomDownBar>
      </Wrapper>
    );
  },
);

export default RoomCard;
