import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const DetailContainer = styled.main`
  padding: 30px 30px;
`;

export const BackBtn = styled(Link)`
  padding: 10px;
  background-color: var(--button);
  color: var(--light);
  border-radius: 3px;
  transition: transform 250ms ease-in-out;
  display: inline-flex;
  gap: 7px;
  align-items: center;

  position: absolute;
  top: 10px;
  left: 30px;

  &:hover,
  &:focus {
    background-color: var(--accent);
    color: var(--background);
    transform: scale(1.1);
  }
`;

export const DetailedContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailedHeading = styled.h1`
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
`;

export const DetailedRating = styled.div`
  margin-bottom: 30px;
`;

export const DetailedImg = styled.img`
  margin-bottom: 30px;
`;

export const DetailedSecHeading = styled.h2`
  margin-bottom: 15px;
`;

export const DetailedText = styled.div`
  margin-bottom: 30px;
`;

export const DetailedGenres = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;

  margin-bottom: 30px;
`;

export const MoreDetails = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;

  margin-bottom: 30px;
`;

export const DetailedBtn = styled.li`
  padding: 10px;
  background-color: var(--button);
  color: var(--light);
  border-radius: 3px;
  transition: transform 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--accent);
    color: var(--background);
    transform: scale(1.1);
  }
`;
