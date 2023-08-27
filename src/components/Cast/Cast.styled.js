import styled from '@emotion/styled';
import { BsFillFilePersonFill } from 'react-icons/bs';

export const CastHeading = styled.h2`
  margin-bottom: 30px;
`;

export const CastPhotos = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;

export const OnePhoto = styled.li`
  position: relative;
`;

export const ActorName = styled.div`
  position: absolute;
  top: 88%;
  left: 0%;
  z-index: 10;

  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
`;

export const ActorText = styled.p`
  padding: 12px 10px;
  font-size: 12px;
  text-align: center;
`;

export const ActorImg = styled.img`
  object-fit: cover;
`;

export const DefaultImg = styled(BsFillFilePersonFill)`
  width: 200px;
  height: 300px;
`;
