/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { TabsList } from './TabsStyles';
import TabItem from './TabItem/TabItem';

type TabProps = {
  title: string;
};

type TabsProps = {
  defaultActive?: number;
  children: React.ReactElement<TabProps>[];
};

const Tabs: React.FC<TabsProps> = ({ defaultActive, children }) => {
  const [activeTab, setActiveTab] = useState(defaultActive || 0);

  const renderedTabs = React.Children.map(children, (item, index) => (
    <TabItem key={index} isActive={activeTab === index} onClick={() => setActiveTab(index)}>
      {item.props.title}
    </TabItem>
  ));

  const activeTabContent = React.Children.toArray(children)[activeTab];

  return (
    <>
      <TabsList>{renderedTabs}</TabsList>
      {activeTabContent}
    </>
  );
};

export default Tabs;
