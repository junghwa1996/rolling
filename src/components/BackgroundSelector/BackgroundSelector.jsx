import { useState } from 'react';

import TabToggle from '../TabToggle/TabToggle';
import RadioCard from './RadioCard';

function BackgroundSelector() {
  const [activeTab, setActiveTab] = useState('컬러');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <TabToggle onClick={handleTabChange} />
      <RadioCard activeTab={activeTab}></RadioCard>
    </>
  );
}

export default BackgroundSelector;
