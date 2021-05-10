// import { useState } from 'react';
import { StyledSidePanel } from './SidePanelStyles';

type Props = {
  children: React.ReactNode;
};

const SidePanel = ({ children }: Props) => <StyledSidePanel>{children}</StyledSidePanel>;
export default SidePanel;
