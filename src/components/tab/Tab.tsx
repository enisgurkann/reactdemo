import React, { FC, useState } from 'react';
import { TabContent, TabHeader, TabHeaderItem, TabHeaderItemTitle } from './Tab.styles';

export type TabItem = { title: string; content: FC };

interface TabProps {
  tabItems: Array<TabItem>;
  initialIndex?: number;
}

export const Tab: FC<TabProps> = ({ tabItems, initialIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const handleClick = (index: number) => setActiveIndex(index);

  return (
    <>
      {tabItems && tabItems.length ? (
        <>
          <TabHeader>
            {tabItems &&
              tabItems.map((tabItem, index) => (
                <TabHeaderItem key={`tabItem-${tabItem.title}`} isActive={activeIndex === index} onClick={() => handleClick(index)}>
                  <TabHeaderItemTitle isActive={activeIndex === index}>{tabItem.title}</TabHeaderItemTitle>
                </TabHeaderItem>
              ))}
          </TabHeader>
          <TabContent>{tabItems[activeIndex].content({})}</TabContent>
        </>
      ) : null}
    </>
  );
};
