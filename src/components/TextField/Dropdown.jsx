import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const StyledDropdownList = styled.ul`
  position: absolute;
  z-index: 1000;
  width: 140px;
  background: #ffffff;
  border: 1px solid #cccccc;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  list-style: none;
  padding: 10px 0;
`;

const DropdownButton = styled.button`
  width: 138px;
  height: 50px;
  padding: 12px 16px;
  cursor: pointer;
  color: #181818;
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
`;

const ButtonText = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: -0.01em;
  text-align: left;
`;

function SharingSelector({ options = [] }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleButtonClick = (action) => {
    console.log(action); // 버튼 클릭 시 행동 정의
    setIsOpen(false); // 드롭다운 닫기
  };

  return (
    <SharingSelectorContainer>
      <Button onClick={toggleDropdown}>
        <Icon src={ShareIcon} alt="Share icon" />
      </Button>
      {isOpen && (
        <StyledDropdownList>
          <DropdownButton onClick={() => handleButtonClick('카카오톡 공유')}>
            <ButtonText>카카오톡 공유</ButtonText>
          </DropdownButton>
          <DropdownButton onClick={() => handleButtonClick('URL 공유')}>
            <ButtonText>URL 공유</ButtonText>
          </DropdownButton>
        </StyledDropdownList>
      )}
    </SharingSelectorContainer>
  );
}

SharingSelector.propTypes = {
  options: PropTypes.array,
};

export default SharingSelector;
