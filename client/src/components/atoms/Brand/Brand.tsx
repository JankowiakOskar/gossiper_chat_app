import styled, { css } from 'styled-components';
import { ReactComponent as Logo } from 'assets/svgs/Logo.svg';

interface StyledProps {
  readonly onNavBar: boolean;
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const BrandTitle = styled.strong<StyledProps>`
  margin-left: 1rem;
  font-size: ${({ theme }) => theme.font.size.large};
  color: ${({ theme, onNavBar }) => onNavBar && theme.colors.white};
`;

const LogoSVG = styled(Logo)<StyledProps>`
  ${({ onNavBar }) =>
    onNavBar &&
    css`
      width: 5rem;
      height: 5rem;
    `}
`;

type Props = {
  onNavBar?: boolean;
};

const Brand: React.FC<Props> = ({ onNavBar = false }) => (
  <Wrapper>
    <LogoSVG onNavBar={onNavBar} />
    <BrandTitle onNavBar={onNavBar}>Gossiper</BrandTitle>
  </Wrapper>
);

export default Brand;
