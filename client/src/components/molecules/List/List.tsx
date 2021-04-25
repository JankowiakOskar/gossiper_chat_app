import { AnimationControls } from 'framer-motion';
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
      delay: i * 0.1,
    },
  }),
  expanded: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
    },
  }),
};

type Props = {
  list: ListElementType[];
  animationControls?: AnimationControls;
};

type AnimationOptions<T> = {
  custom: number;
  initial: T;
  animate: AnimationControls | undefined;
};

type GenerateAnimationProps = <T>(initialAnimationValues: T, i: number) => AnimationOptions<T>;

const List: React.FC<Props> = ({ list, animationControls = undefined }) => {
  const handleClick = (e: React.MouseEvent, callback: ListElementType['clickHandler']) => {
    if (!callback) return;
    callback();
  };

  const createImperativeAnimationProps: GenerateAnimationProps = (initialAnimationValues, i) => ({
    custom: i,
    initial: initialAnimationValues,
    animate: animationControls,
  });

  return (
    <StyledList>
      {list.map(({ name, path, icon, clickHandler }: ListElementType, index: number) => {
        if (path)
          return (
            <ListElement key={name} {...(animationControls && createImperativeAnimationProps(listElementVariants.initial, index))}>
              <CustomLink to={path}>
                {icon && icon}
                <StyledSpan>{name}</StyledSpan>
              </CustomLink>
            </ListElement>
          );

        return (
          <ListElement
            key={name}
            {...(animationControls && createImperativeAnimationProps(listElementVariants.initial, index))}
            onClick={e => handleClick(e, clickHandler)}
          >
            {icon && icon}
            <StyledSpan>{name}</StyledSpan>
          </ListElement>
        );
      })}
    </StyledList>
  );
};

export default List;
