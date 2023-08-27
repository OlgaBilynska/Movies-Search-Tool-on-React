import styled from '@emotion/styled';

export const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const LoaderBackdrop = styled.div`
  background-color: rgba(164, 212, 180, 0.5);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0%;
  left: 0%;
`;
