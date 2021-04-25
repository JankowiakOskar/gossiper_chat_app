import React from 'react';
import { LinkProps } from 'react-router-dom';
import { StyledLink } from './CustomLinkStyles';

const CustomLink: React.FC<LinkProps> = ({ children, ...rest }) => <StyledLink {...rest}>{children}</StyledLink>;

export default CustomLink;
