import React from 'react';
import { LinkProps } from 'react-router-dom';
import { StyledLink } from './CustomLinkStyles';

type LProps = LinkProps & {
  className?: '';
};

const CustomLink: React.FC<LProps> = ({ children, className, ...rest }) => (
  <StyledLink className={className} {...rest}>
    {children}
  </StyledLink>
);

export default CustomLink;
