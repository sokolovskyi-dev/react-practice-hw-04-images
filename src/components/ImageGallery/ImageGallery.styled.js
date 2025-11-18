import styled from 'styled-components';

export const Gallery = styled.ul`
  display: grid;
  gap: 20px;

  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  margin-top: 20px;

  &:has(li:hover) {
    li:not(:hover) {
      opacity: 0.5;
    }
  }
`;
