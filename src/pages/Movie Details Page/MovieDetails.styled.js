import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { BiMoviePlay } from 'react-icons/bi';

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

export const ImageTemplate = styled(BiMoviePlay)`
  width: 200px;
  height: 300px;
`;

export const DetailedContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    align-items: baseline;
  }
`;

export const DetailedCard = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 50px;
  }
`;

export const DetImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    min-width: 200px;
  }
`;

export const DetailedHeading = styled.div`
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const DetailedRating = styled.div`
  margin-bottom: 30px;
`;

export const DetailedImg = styled.img`
  margin-bottom: 30px;
`;

export const DetailedSecHeading = styled.h2`
  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
    display: inline;
    text-align: start;
  }
`;

export const DetailedText = styled.div`
  margin-bottom: 30px;
`;

export const DetailedGenres = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;

  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    gap: 10px;
  }
`;

export const MoreDetails = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;

  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    justify-content: start;
    gap: 50px;
  }
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
