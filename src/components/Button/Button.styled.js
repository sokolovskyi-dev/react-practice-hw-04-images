import styled from 'styled-components';

export const LoadButton = styled.button`
  display: block;
  margin: 20px auto;

  background-color: #f2f2f7;
  color: #000000cc;
  border: none;
  border-radius: 12px;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    box-shadow 0.2s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #e5e5ea;
  }

  &:active {
    background-color: #d1d1d6;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.15);
  }
`;
