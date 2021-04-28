import { Color } from 'utils/types/enums';
import { ChatRoom } from 'features/chatRooms/types';
import Tags from 'components/molecules/Tags/Tags';
import { AnimatePresence } from 'framer-motion';
import { Wrapper, RoomTitle, RoomDescription, StyledButton, RoomDownBar, ChatIcon, HighlightText } from './RoomCardStyles';

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
    transiton: {
      type: 'easeOut',
      duration: 0.3,
      delay: 0.2,
    },
  },
};

type RoomCardProps = Omit<ChatRoom, 'activeUsers'> & {
  activeUsers: number;
  index?: number;
  className?: string;
  handleCB?: () => any;
  isExpanded: boolean;
};

const RoomCard: React.FC<RoomCardProps> = ({
  index,
  name,
  description,
  activeUsers,
  tags,
  isPrivate,
  className = '',
  handleCB,
  isExpanded,
}) => (
  <Wrapper
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
    <RoomDescription>{description}</RoomDescription>
    <AnimatePresence exitBeforeEnter initial={false}>
      {isExpanded && (
        <div>
          <HighlightText>Tags:</HighlightText>
          <Tags tags={tags} />
        </div>
      )}
    </AnimatePresence>
    <RoomDescription>{activeUsers}</RoomDescription>
    <RoomDescription>{isPrivate}</RoomDescription>
    <RoomDownBar>
      <StyledButton color={Color.LightBlue}>
        Join <ChatIcon />
      </StyledButton>
    </RoomDownBar>
  </Wrapper>
);

export default RoomCard;
