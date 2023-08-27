import styled from '@emotion/styled';

export const Container = styled.main`
  background-color: var(--text);
  padding: 0 30px;
  min-height: 100vh;
`;

export const Header = styled.header`
  padding: 10px 30px;
  background: linear-gradient(90deg, var(--background) 0%, var(--text) 80%);
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: end;
`;

export const NavEl = styled.li`
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

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  background-color: var(--button);
  color: var(--light);
  font-size: 14px;
  background: linear-gradient(180deg, var(--text) 40%, var(--background) 100%);
`;

export const SubscribeFooter = styled.form`
  display: flex;
  gap: 3px;
  flex-direction: column;
  max-width: 30%;
  color: var(--light);
`;

export const SubInputFooter = styled.input`
  background-color: var(--light);
  outline: none;
  padding: 0px 7px;
  border-radius: 3px;

  &:focus {
    background-color: var(--background);
  }

  &::placeholder {
    color: var(--text);
  }
`;

export const CopywriterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`;

export const CopySubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`;

export const CopyBlock = styled.div`
  display: flex;
  gap: 3px;
`;

export const NavFooter = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: end;
`;

export const FooterMenuEl = styled.li`
  color: var(--light);
  padding: 7px;
  border: 1px solid var(--light);
  border-radius: 3px;
  transition: transform 250ms ease-in-out;

  &:hover,
  &:focus {
    background-color: var(--accent);
    color: var(--background);
    border: var(--background);
    transform: scale(1.1);
  }
`;
