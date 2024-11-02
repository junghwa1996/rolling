import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { CommonMessage } from '../../styles/Common/CommonMessages.styles';
import {
  CardListContainer,
  ItemArea,
  ButtonArea,
} from '../../styles/Layout/CommonLayout.styles';
import useDeviceType from '../../hooks/useDeviceType';
import { deleteMessages, deleteRolling } from '../../service/api';
import Button from '../../components/Button/Button';
import Card from '../../components/CardList/Card';

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

  if (loading)
    return (
      <CommonMessage $messageType="primary">
        데이터를 불러오는 중입니다. 잠시만 기다려주세요...
      </CommonMessage>
    );

  if (error)
    return (
      <CommonMessage $messageType="error">
        데이터를 삭제하는 중 오류가 발생했습니다. 다시 시도해주세요. 🫠
      </CommonMessage>
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
          <CommonMessage $messageType="secondary">
            표시할 데이터가 없습니다.
          </CommonMessage>
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
