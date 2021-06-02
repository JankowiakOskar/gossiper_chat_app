import React from 'react';
import { LinkProps } from 'react-router-dom';
import { StyledLink } from './CustomLinkStyles';

type LProps = LinkProps & {
  className?: '';
};

const CustomLink = ({ children, className, ...rest }: LProps) => (
  <StyledLink className={className} {...rest}>
    {children}
  </StyledLink>
);

CustomLink.defaultProps = {
  className: '',
};

export default CustomLink;
