import styled, { css } from 'styled-components';

const sizes = {
  s: css`
    padding: 13px 20px;
    border-radius: 6px;
    font-size: 16px;
  `,
  m: css`
    width: 120px;
    height: 40px;
    border-radius: 6px;
    font-size: 16px;
  `,
  l: css`
    width: 280px;
    height: 56px;
    border-radius: 12px;
    font-size: 18px;
    font-weight: bold;
  `,
  xl: css`
    width: 100%;
    height: 56px;
    border-radius: 12px;
    font-size: 18px;
    font-weight: bold;
  `,
};

const colors = {
  primary: css`
    border: none;
    background-color: #9935ff;
    color: #ffffff;

    &:hover {
      background-color: #861dee;
    }
    &:active,
    &:focus:active {
      background-color: #6e0ad1;
    }
    &:focus {
      background-color: #6e0ad1;
      outline: none;
    }
    &:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }
  `,
  secondary: css`
    border: 1px solid #9935ff;
    background-color: #ffffff;
    color: #861dee;

    &:hover {
      border-color: #861dee;
      background-color: #f7f0ff;
      color: #9935ff;
    }
    &:active,
    &:focus:active {
      border-color: #6e0ad1;
      background-color: #f7f0ff;
      color: #9935ff;
    }
    &:focus {
      border-color: #6e0ad1;
      background-color: #ffffff;
      color: #9747ff;
      outline: none;
    }
    &:disabled {
      border: none;
      background-color: #cccccc;
      color: #ffffff;
      cursor: not-allowed;
    }
  `,
};

export const StButton = styled.button`
  transition: all 0.3s ease;

  ${({ size }) => sizes[size]}
  ${({ color }) => colors[color]}
`;
