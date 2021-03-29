import styled from 'styled-components';
import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
`;

const CustomLink: React.FC<LinkProps> = ({ children, ...rest }) => <StyledLink {...rest}>{children}</StyledLink>;

export default CustomLink;
