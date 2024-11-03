// SkeletonCard.jsx
import React from 'react';

import {
  SkeletonCardContainer,
  SkeletonHeader,
  SkeletonContent,
} from './SkeletonCard.styles';

function SkeletonCard() {
  return (
    <SkeletonCardContainer>
      <SkeletonHeader />
      <SkeletonContent />
    </SkeletonCardContainer>
  );
}

export default SkeletonCard;
