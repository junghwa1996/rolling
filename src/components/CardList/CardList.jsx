import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useDeviceType from '../../hooks/useDeviceType';
import { deleteMessages, deleteRolling } from '../../service/api';
import Button from '../Button/Button';
import Card from './Card';

const CardListContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1.1rem;
`;

const ItemArea = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.8rem 2.4rem;

  @media screen and (max-width: 1248px) {
    gap: 1.6rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1248px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ButtonArea = styled.div`
  @media screen and (max-width: 1248px) {
    position: fixed;
    bottom: 2.4rem;
    left: 2.4rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1248px) {
    width: 72rem;
  }

  @media screen and (max-width: 767px) {
    width: 32rem;
    left: 2rem;
  }
`;

function CardList({ type, messageData = [], onEvent, children }) {
  const [messageDataList, setMessageDataList] = useState(messageData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const deviceType = useDeviceType();

  useEffect(() => {
    setMessageDataList(messageData);
  }, [messageData]);

  const currentPathSegments = location.pathname.split('/');
  const presentId = currentPathSegments[currentPathSegments.length - 2];

  const handleDeleteClick = async (id, event) => {
    event.stopPropagation();
    setLoading(true);
    setError(null);
    try {
      await deleteMessages(id);
      setMessageDataList((prevData) =>
        prevData.filter((item) => item.id !== id),
      );
      navigate(`/post/${presentId}`);
    } catch (err) {
      setError(err);
      console.error(`삭제 실패: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePage = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await deleteRolling(id);
      setMessageDataList((prevData) =>
        prevData.filter((item) => item.id !== id),
      );
      navigate(`/list/`);
    } catch (err) {
      setError(err);
      console.error(`삭제 실패: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (presentId, messageId) => {
    navigate(`/post/${presentId}/message?id=${messageId}`);
  };

  if (loading) return <p>데이터를 불러오는 중입니다. 잠시만 기다려주세요...</p>;
  if (error)
    return (
      <p>데이터를 삭제하는 중 오류가 발생했습니다. 다시 시도해주세요. 🫠</p>
    );

  return (
    <CardListContainer>
      {type === 'edit' && (
        <ButtonArea>
          <Button
            size={deviceType === 'pc' ? 's' : 'xl'}
            color="primary"
            onClick={() => handleDeletePage(presentId)}>
            삭제하기
          </Button>
        </ButtonArea>
      )}
      <ItemArea>
        {children}
        {messageDataList.length > 0 ? (
          messageDataList.map((item) => (
            <Card
              key={item.id}
              type={type}
              messageData={{ ...item }}
              onEvent={{
                modal: () => onEvent?.modal?.(item.id),
                buttonDelete: (event) => handleDeleteClick(item.id, event),
                buttonEdit: (event) => {
                  event.stopPropagation();
                  handleEditClick(presentId, item.id);
                },
              }}
            />
          ))
        ) : (
          <p>표시할 데이터가 없습니다.</p>
        )}
      </ItemArea>
    </CardListContainer>
  );
}

CardList.propTypes = {
  type: PropTypes.string.isRequired,
  messageData: PropTypes.array.isRequired,
  onEvent: PropTypes.object,
  children: PropTypes.any,
};

export default CardList;
