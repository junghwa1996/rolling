import React from 'react';
import useDeviceType from '../../../hooks/useDeviceType';
import {
  SkeletonListContainer,
  SkeletonItem,
  Title,
  Avatar,
  WriteCount,
} from './SkeletonList.styles';

function SkeletonList() {
  const deviceType = useDeviceType();
  const skeleton = [];
  let itemCount;

  switch (deviceType) {
    case 'tablet':
      itemCount = 2;
      break;
    case 'mobile':
      itemCount = 1;
      break;
    default:
      itemCount = 4;
  }

  for (let i = 1; i <= itemCount; i++) {
    skeleton.push(
      <SkeletonItem>
        <Title></Title>
        <Avatar></Avatar>
        <WriteCount></WriteCount>
      </SkeletonItem>,
    );
  }

  return <SkeletonListContainer>{skeleton}</SkeletonListContainer>;
}

export default SkeletonList;
