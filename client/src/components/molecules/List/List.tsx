import styled from 'styled-components';
import { motion, AnimationControls } from 'framer-motion';
import CustomLink from 'components/atoms/CustomLink/CustomLink';

const StyledList = styled.ul`
  list-style: none;
  max-width: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ListElement = styled(motion.li)`
  margin: 1rem 0;
  padding: 0.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSpan = styled.span`
  padding: 0 0 0 1rem;
`;

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

export type ListElementType = {
  name: string;
  path?: string;
  icon?: React.SVGProps<SVGSVGElement>;
};

type Props = {
  list: ListElementType[];
  animationControls: AnimationControls;
};

const List: React.FC<Props> = ({ list, animationControls }) => (
  <StyledList>
    {list.map((el, index) => {
      if (el.path)
        return (
          <ListElement key={el.name} custom={index} initial={listElementVariants.initial} animate={animationControls}>
            <CustomLink to={el.path}>
              {el.icon && el.icon}
              <StyledSpan>{el.name}</StyledSpan>
            </CustomLink>
          </ListElement>
        );

      return (
        <ListElement key={el.name} custom={index} initial={listElementVariants.initial} animate={animationControls}>
          {el.icon && el.icon}
          <StyledSpan>{el.name}</StyledSpan>
        </ListElement>
      );
    })}
  </StyledList>
);

export default List;
