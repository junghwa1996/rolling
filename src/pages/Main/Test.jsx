import React from 'react';
import styled from 'styled-components';

const Test = styled.div`
  font-size: 1rem;
  display: block;
  ul {
    background-color: #fff;
    font-size: 1.2rem;
    color: red;
    li {
      font-size: 1.4rem;
      display: block;
      background-color: #fff;
    }
  }
`;

function componentName(props) {
  return (
    <>
      <Test />
    </>
  );
}

export default componentName;
