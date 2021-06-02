import CustomLink from 'components/atoms/CustomLink/CustomLink';
import { ListElementType } from 'utils/types/types';
import { StyledList, StyledSpan, ListElement } from './NavListStyles';

export const listElementVariants = {
  initial: {
    x: -50,
    opacity: 0,
    display: 'none',
  },
  collapsed: (i: number) => ({
    x: -50,
    opacity: 0,
    display: 'none',
    transition: {
      type: 'easeOut',
      duration: 0.15,
      delay: i * 0.05,
      display: {
        delay: 1,
      },
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

const NavList = ({ list, isExpanded }: Props) => {
  const handleClick = (e: React.MouseEvent, callback: ListElementType['clickHandler']) => {
    if (!callback) return;
    callback();
  };

  const renderList = (listToRender: typeof list) =>
    listToRender.map(({ name, path, icon, clickHandler }: ListElementType, index: number) =>
      path ? (
        <CustomLink key={name} to={path}>
          <ListElement custom={index} variants={listElementVariants} animate={isExpanded ? 'expanded' : 'collapsed'}>
            {icon && icon}
            <StyledSpan>{name}</StyledSpan>
          </ListElement>
        </CustomLink>
      ) : (
        <ListElement
          key={name}
          custom={index}
          variants={listElementVariants}
          animate={isExpanded ? 'expanded' : 'collapsed'}
          onClick={e => handleClick(e, clickHandler)}
        >
          {icon && icon}
          <StyledSpan>{name}</StyledSpan>
        </ListElement>
      ),
    );

  return <StyledList>{renderList(list)}</StyledList>;
};

export default NavList;
