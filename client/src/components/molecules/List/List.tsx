import CustomLink from 'components/atoms/CustomLink/CustomLink';
import { ListElementType } from 'utils/types/types';
import { StyledList, StyledSpan, ListElement } from './ListStyles';

export const listElementVariants = {
  initial: {
    x: -50,
    opacity: 0,
  },
  collapsed: (i: number) => ({
    x: -50,
    opacity: 0,
    transition: {
      type: 'easeOut',
      duration: 0.15,
      delay: i * 0.05,
    },
  }),
  expanded: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      type: 'easeIn',
      duration: 0.15,
      delay: i * 0.1,
    },
  }),
};

type Props = {
  list: ListElementType[];
  isExpanded: boolean;
};

const List: React.FC<Props> = ({ list, isExpanded }) => {
  const handleClick = (e: React.MouseEvent, callback: ListElementType['clickHandler']) => {
    if (!callback) return;
    callback();
  };

  return (
    <StyledList>
      {list.map(({ name, path, icon, clickHandler }: ListElementType, index: number) => (
        <ListElement
          key={name}
          custom={index}
          variants={listElementVariants}
          animate={isExpanded ? 'expanded' : 'collapsed'}
          {...(!path && { onClick: e => handleClick(e, clickHandler) })}
        >
          {path ? (
            <CustomLink to={path}>
              {icon && icon}
              <StyledSpan>{name}</StyledSpan>
            </CustomLink>
          ) : (
            <>
              {icon && icon}
              <StyledSpan>{name}</StyledSpan>
            </>
          )}
        </ListElement>
      ))}
    </StyledList>
  );
};

export default List;
