import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import styles from './MainHeader.module.css';
import Logo from '../../components/Logo/Logo';
import { HeaderArea, InfoHeader, LogoHeader } from './MainHeader.styles';
import useDeviceType from '../../hooks/useDeviceType';
import Outlined from '../../components/Outlined/Outlined';
import { getRollingItem } from '../../service/api';
import SharingSelector from '../Emoji/SharingSelector';
import TotalMessage from '../../components/TotalMessage/TotalMessage';
import EmojiPickerComponent from '../Emoji/EmojiPickerComponent';

MainHeader.propTypes = {
  type: PropTypes.oneOf(['default', 'mobileHidden', 'doubleLine']),
};

function MainHeader({ type = 'default' }) {
  const location = useLocation();
  const presentPath = location.pathname.split('/');
  const id = presentPath.includes('edit')
    ? presentPath[presentPath.length - 2]
    : presentPath[presentPath.length - 1];

  const isDeviceType = useDeviceType();
  const [rollingData, setRollingData] = useState(null);

  console.log(id);
  console.log(type);

  useEffect(() => {
    if (type === 'doubleLine') {
      const getData = async () => {
        try {
          const response = await getRollingItem(id);
          setRollingData(response);
          console.log('아이템', response);
        } catch (error) {
          console.error(error);
        }
      };
      getData();
    }
  }, [type, id]);

  console.log(rollingData);

  return (
    <HeaderArea $type={type}>
      <div>
        <LogoHeader $type={type}>
          <Logo />
          {type === 'default' && (
            <Outlined size="s" to="/post">
              롤링 페이퍼 만들기
            </Outlined>
          )}
        </LogoHeader>
        <InfoHeader $type={type}>
          <div>
            <h1>To.{rollingData?.name}</h1>
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
            {/* <EmojiDropDown></EmojiDropDown> */}
            <EmojiPickerComponent />
            <div className={styles.sharingSelectorContainer}>
              <SharingSelector></SharingSelector>
            </div>
          </div>
        </InfoHeader>
      </div>
    </HeaderArea>
  );
}

export default MainHeader;
