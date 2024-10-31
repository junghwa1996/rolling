import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Dropdown from '../../components/TextField/Dropdown'; // 경로 확인 필요
import ShareIcon from '../../assets/icon-share-24.svg';

const SharingSelectorContainer = styled.div`
  position: relative;
`;

const Button = styled.button`
  width: 56px;
  height: 36px;
  padding: 6px 16px;
  border-radius: 6px;
  border: 1px solid #cccccc;
  background: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;

function SharingSelector() {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: 'url-copy', label: 'URL 복사' }, // URL 복사 항목 추가
  ];

  const handleSelect = (option) => {
    console.log(option.label); // 선택한 옵션에 대한 행동 정의
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SharingSelectorContainer>
      <Button onClick={toggleDropdown}>
        <Icon src={ShareIcon} alt="Share icon" />
      </Button>
      {isOpen && (
        <Dropdown
          options={options}
          onSelect={handleSelect}
          isIcon={false} // 아이콘 버튼이 아닌 경우
        />
      )}
    </SharingSelectorContainer>
  );
}

SharingSelector.propTypes = {
  options: PropTypes.array,
};

export default SharingSelector;
