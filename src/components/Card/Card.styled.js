import styled from '@emotion/styled';
import { BsFileImage } from 'react-icons/bs';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  border-radius: 5px;
  box-shadow: 2px 2px 3px 1.5px var(--background);
  outline: none;
  padding: 10px;
  height: 340px;

  background-color: var(--button);
  color: var(--light);

  transition: transform5 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--accent);
    color: var(--background);
    transform: rotate(5deg);
  }
`;

export const CardTitle = styled.div`
  max-width: 200px;
  justify-content: center;
`;

export const ImageTemplate = styled(BsFileImage)`
  width: 200px;
  height: 300px;
`;
