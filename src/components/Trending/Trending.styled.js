import styled from '@emotion/styled';

export const TrendingList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  padding: 20px 30px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
