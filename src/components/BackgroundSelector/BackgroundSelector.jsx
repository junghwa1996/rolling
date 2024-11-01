import { useState } from 'react';
import PropTypes from 'prop-types';

import TabToggle from '../TabToggle/TabToggle';
import RadioCard from './RadioCard';

function BackgroundSelector({ onBackgroundChange }) {
  const [activeTab, setActiveTab] = useState('컬러');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <TabToggle onClick={handleTabChange} />
      <RadioCard
        activeTab={activeTab}
        onBackgroundChange={onBackgroundChange}></RadioCard>
    </>
  );
}

BackgroundSelector.propTypes = {
  onBackgroundChange: PropTypes.func,
};

export default BackgroundSelector;
