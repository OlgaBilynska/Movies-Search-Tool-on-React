import styled from '@emotion/styled';

export const MovieContainer = styled.section`
  padding: 30px 30px;
`;

export const MovieSearchEls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

export const FindMovieText = styled.div`
  font-size: 22px;
  font-weight: 550;
`;

export const FindForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const FindInput = styled.input`
  background-color: var(--light);
  color: var(--text);
  padding-left: 7px;
  font-size: 20px;
  border-radius: 5px;

  &:focus {
    background-color: var(--background);
  }
`;

export const FindBtn = styled.button`
  background-color: var(--button);
  color: var(--light);
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 15px;
  outline: transparent;
  transition: transform 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--accent);
    color: var(--background);
    transform: scale(1.1);
  }
`;

export const MovieResultCont = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  padding: 20px 30px;
`;
