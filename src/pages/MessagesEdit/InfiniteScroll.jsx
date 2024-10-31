import React, { useEffect, useRef, useState } from 'react';

const InfiniteScroll = ({ fetchData, hasMore, children }) => {
  const observer = useRef();
  const [loading, setLoading] = useState(false);

  const lastElementRef = useRef();

  const handleObserver = (entries) => {
    const target = entries[0];
    if (target.isIntersecting && hasMore && !loading) {
      setLoading(true);
      fetchData().finally(() => setLoading(false));
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };

    observer.current = new IntersectionObserver(handleObserver, options);
    if (lastElementRef.current) {
      observer.current.observe(lastElementRef.current);
    }

    return () => {
      if (lastElementRef.current) {
        observer.current.unobserve(lastElementRef.current);
      }
    };
  }, [lastElementRef, hasMore, loading]);

  return (
    <>
      {children}
      {hasMore && <div ref={lastElementRef} style={{ height: '20px' }} />}
      {loading && <p>로딩 중...</p>}
    </>
  );
};

export default InfiniteScroll;
