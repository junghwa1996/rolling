import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef } from 'react';

function InfiniteScroll({ fetchMoreData, data, hasMore, children, loading }) {
  const observer = useRef();
  const lastElementRef = useRef();

  const handleObserver = useCallback(
    (entries) => {
      const target = entries[0];
      if (target.isIntersecting && hasMore && !loading) {
        fetchMoreData();
      }
    },
    [hasMore, loading, fetchMoreData],
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    observer.current = new IntersectionObserver(handleObserver, options);

    const currentRef = lastElementRef.current;
    if (currentRef) {
      observer.current.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.current.unobserve(currentRef);
      }
    };
  }, [handleObserver]);

  return (
    <>
      {data.map((item) => children(item))}
      {hasMore && <div ref={lastElementRef} style={{ height: '20px' }} />}
      {loading && <p>로딩 중...</p>}
    </>
  );
}

InfiniteScroll.propTypes = {
  fetchMoreData: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  hasMore: PropTypes.bool.isRequired,
  children: PropTypes.func,
  loading: PropTypes.bool.isRequired, // loading prop 추가
};

export default InfiniteScroll;
