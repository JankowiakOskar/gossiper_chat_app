import styled from 'styled-components';
import Circle from 'components/atoms/Circle/Cricle';

export const ListWrapper = styled.div`
  padding: 0 1rem;
`;

export const ListHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListName = styled.h2`
  color: ${({ theme }) => theme.colors.goldenYellow};
`;

export const IconWrapper = styled.div`
  position: relative;
`;

export const StyledCircle = styled(Circle)`
  && {
    position: absolute;
    top: -0.5rem;
    right: -1rem;
  }
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListElement = styled.li`
  position: relative;
  padding: 1rem 2rem;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: -0.1rem;
    transform: translate(0, -50%);
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    background-color: ${({ theme }) => theme.colors.lightGreen};
  }
`;
