import React from 'react';
import PropTypes from 'prop-types';

const DeleteClick = ({ itemId, onDelete, children, style }) => {
  const handleDelete = () => {
    // 즉시 삭제
    onDelete(itemId);
  };

  return (
    <span
      onClick={handleDelete}
      style={{
        cursor: 'pointer',
        ...style, // 추가 스타일을 위한 props
      }}>
      {children}
    </span>
  );
};

DeleteClick.propTypes = {
  itemId: PropTypes.string.isRequired, // 삭제할 아이템의 ID
  onDelete: PropTypes.func.isRequired, // 삭제 함수
  children: PropTypes.node.isRequired, // 클릭 가능한 요소
  style: PropTypes.object, // 추가 스타일
};

export default DeleteClick;
