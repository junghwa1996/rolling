// ButtonContainerComponent.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ReactComponent as DeleteIcon } from '../../assets/icon-delete.svg';
import { ReactComponent as UpdateIcon } from '../../assets/icon-edit.svg';
import Outlined from '../Outlined/Outlined';

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

function ButtonContainerComponent({ onEdit, onDelete }) {
  return (
    <ButtonContainer>
      <Outlined icon={<UpdateIcon />} onClick={onEdit} />
      <Outlined icon={<DeleteIcon />} onClick={onDelete} />
    </ButtonContainer>
  );
}

ButtonContainerComponent.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ButtonContainerComponent;
