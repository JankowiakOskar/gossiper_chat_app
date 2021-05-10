import styled, { css } from 'styled-components';

type StyledProps = {
  readonly isActive: boolean;
};

export const StyledTabItem = styled.li<StyledProps>`
  padding: 0 0 1rem 0;
  margin: 0 0 0.5rem 0;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transition: all 0.2s ease;

  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: 0.3rem solid ${({ theme }) => theme.colors.goldenYellow};
      color: ${({ theme }) => theme.colors.goldenYellow};
      font-weight: bold;
    `}
`;
