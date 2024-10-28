import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';

const DropDownBtn = styled.div`
  width: 320px; //임의의 width
  padding: 12px 16px;

  border: 1px solid ${({ theme }) => theme.colorTheme.grayscale['300']};
  border-radius: 8px;
`;

function Dropdown({ options, selectedOption, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <>
      <DropDownBtn onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.value : options[0].value}
      </DropDownBtn>
      {isOpen && (
        <ul>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)}>
              {option.value}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ),
  selectedOption: PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  }),
  onSelect: PropTypes.func,
};

export default Dropdown;
