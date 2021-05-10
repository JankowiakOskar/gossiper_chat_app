import { StyledTabItem } from './TabItemStyles';

type TabItemProps = {
  isActive: boolean;
  onClick: () => any;
  children: React.ReactNode;
};

const TabItem = ({ isActive, onClick, children }: TabItemProps) => (
  <StyledTabItem isActive={isActive} onClick={onClick}>
    {children}
  </StyledTabItem>
);

export default TabItem;
