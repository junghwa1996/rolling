import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import styles from './MainHeader.module.css';
import Logo from '../../components/Logo/Logo';
import { HeaderArea, InfoHeader, LogoHeader } from './MainHeader.styles';
import useDeviceType from '../../hooks/useDeviceType';
import Outlined from '../../components/Outlined/Outlined';
import { getRollingItem, getRollingEmoji } from '../../service/api';
import SharingSelector from '../Emoji/SharingSelector';
import TotalMessage from '../../components/TotalMessage/TotalMessage';
import EmojiPickerComponent from '../Emoji/EmojiPickerComponent';
import DarkModeToggle from '../../components/DarkModeToggle/DarkModeToggle';
import EmojiDropDown from '../Emoji/EmojiDropDown';
import { useEmojiManager } from '../Emoji/useEmojiManager';

MainHeader.propTypes = {
  type: PropTypes.oneOf(['default', 'mobileHidden', 'doubleLine']),
  isDarkMode: PropTypes.bool.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

function MainHeader({ type = 'default', isDarkMode, toggleTheme }) {
  const location = useLocation();
  const presentPath = location.pathname.split('/');
  const id = presentPath.includes('edit')
    ? presentPath[presentPath.length - 2]
    : presentPath[presentPath.length - 1];

  const isDeviceType = useDeviceType();
  const [rollingData, setRollingData] = useState(null);
  const [emojisList, setEmojisList] = useState([]);
  const [loading, setLoading] = useState(false); // 로딩 상태 추가
  const { isLoading, addEmoji, removeEmoji } = useEmojiManager(id);

  // 서버로부터 롤링 데이터를 가져오는 함수
  useEffect(() => {
    if (type === 'doubleLine') {
      const getData = async () => {
        try {
          setLoading(true); // 로딩 상태 시작
          const response = await getRollingItem(id);
          setRollingData(response);
        } catch (error) {
          console.error(`MainHeader response :  ${error}`);
        } finally {
          setLoading(false); // 로딩 상태 종료
        }
      };
      getData();
    }
  }, [type, id]);

  // 서버로부터 이모지 데이터를 가져오는 함수
  const getEmojiData = useCallback(async () => {
    try {
      setLoading(true); // 로딩 상태 시작
      const response = await getRollingEmoji(id);
      setEmojisList(response?.results || []);
    } catch (err) {
      console.error('이모지 데이터를 가져오는 중 오류 발생(MainHeader):', err);
    } finally {
      setLoading(false); // 로딩 상태 종료
    }
  }, [id]);

  useEffect(() => {
    // 해당 페이지 경로에서는 이모지 데이터를 로드하지않음
    if (location.pathname !== '/' && location.pathname !== '/list') {
      getEmojiData();
    }
  }, [location.pathname, getEmojiData]);

  // 이모지 추가 이벤트 핸들러
  const handleEmojiAdd = async (emojiObject) => {
    try {
      setLoading(true); // 이모지 추가 중 로딩 상태 시작
      await addEmoji(emojiObject);
      await getEmojiData(); // 업데이트된 이모지 목록 다시 가져오기
    } catch (err) {
      console.error('이모지 추가 중 오류 발생:', err);
    } finally {
      setLoading(false); // 이모지 추가 완료 후 로딩 상태 종료
    }
  };

  // 이모지 삭제 이벤트 핸들러
  const handleEmojiDelete = async (emoji) => {
    try {
      setLoading(true); // 이모지 삭제 중 로딩 상태 시작
      await removeEmoji(emoji, { type: 'decrease' });
      setEmojisList((prev) => prev.filter((item) => item.id !== emoji.id)); // 삭제된 이모지를 즉시 반영
    } catch (err) {
      console.error('이모지 삭제 중 오류 발생:', err);
    } finally {
      setLoading(false); // 이모지 삭제 완료 후 로딩 상태 종료
    }
  };

  return (
    <HeaderArea $type={type}>
      <div>
        <LogoHeader $type={type}>
          <Logo />
          <DarkModeToggle
            isDarkMode={isDarkMode}
            toggleTheme={toggleTheme}
            mobileWidth={3}
          />
          {type === 'default' && (
            <Outlined size="s" to="/post">
              롤링 페이퍼 만들기
            </Outlined>
          )}
        </LogoHeader>
        <InfoHeader $type={type}>
          <div>
            <h1>To.{rollingData?.name}</h1>
            {isDeviceType === 'mobile' && (
              <DarkModeToggle
                isDarkMode={isDarkMode}
                toggleTheme={toggleTheme}
                mobileWidth={6}
              />
            )}
          </div>
          <div>
            {isDeviceType === 'pc' && (
              <div className={styles.totalMessageContainer}>
                <TotalMessage
                  recentMessages={rollingData?.recentMessages}
                  messageCount={rollingData?.messageCount}
                />
              </div>
            )}
            <EmojiDropDown
              emojiList={emojisList}
              onEmojiDelete={handleEmojiDelete}
            />
            <EmojiPickerComponent
              id={id}
              emojisList={emojisList} // 이모지 목록 전달
              onEmojiAdd={handleEmojiAdd} // 이모지 추가 핸들러 전달
              onEmojiDelete={handleEmojiDelete} // 이모지 삭제 핸들러 전달
              isLoading={isLoading || loading} // 로딩 상태 전달
            />
            <div className={styles.sharingSelectorContainer}>
              <SharingSelector />
            </div>
          </div>
        </InfoHeader>
      </div>
    </HeaderArea>
  );
}

export default MainHeader;
