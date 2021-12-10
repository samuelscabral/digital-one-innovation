import styled from 'styled-components';

interface CardProps {
  photo: string;
}

export const Card = styled.div<CardProps>`
  min-width: 90px;
  height: 90px;
  border-radius: 8px;
  background-image: url(${({ photo }) => photo});
  background-size: cover;
  p {
    margin-left: 6px;
    margin-top: 10px;
  }
`;
