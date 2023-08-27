import styled from '@emotion/styled';
import { MdOutlineRateReview } from 'react-icons/md';

export const ReviewContainer = styled.ul`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
`;

export const ReviewHeading = styled.h2`
  margin-bottom: 30px;
  text-align: center;
`;

export const ReviewItem = styled.li`
  text-align: start;
  margin-bottom: 10px;

  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ReviewIcon = styled(MdOutlineRateReview)`
  width: 15px;
  height: 15px;
  min-width: 15%;
`;

export const ReviewContent = styled.p``;
