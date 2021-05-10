/* eslint-disable react/no-unused-prop-types */
type TabProps = {
  title: string;
  children: React.ReactNode;
};

const Tab = ({ children }: TabProps) => <>{children}</>;

export default Tab;
