import { NavLink, Outlet } from 'react-router-dom';
import { AiOutlineCopyright } from 'react-icons/ai';
import { Suspense } from 'react';
import {
  Header,
  Container,
  NavList,
  NavEl,
  Footer,
  NavFooter,
  FooterMenuEl,
  CopywriterContainer,
  CopySubContainer,
  SubscribeFooter,
  SubInputFooter,
  CopyBlock,
} from './Layout.styled';
import Loader from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <NavList>
            <NavEl>
              <NavLink to="/">Home</NavLink>
            </NavEl>
            <NavEl>
              <NavLink to="/movies">Movies</NavLink>
            </NavEl>
          </NavList>
        </nav>
      </Header>
      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer>
        <SubscribeFooter>
          <label name="subscribe">Subscribe to news:</label>
          <SubInputFooter name="subscribe" placeholder="Email " />
        </SubscribeFooter>

        <CopywriterContainer>
          <CopySubContainer>
            <CopyBlock>
              <span>Copywrite</span>
              <AiOutlineCopyright />
            </CopyBlock>

            <span>2023</span>
          </CopySubContainer>

          <p>All rights reserved</p>
        </CopywriterContainer>

        <nav>
          <NavFooter>
            <FooterMenuEl>
              <NavLink to="/">Home</NavLink>
            </FooterMenuEl>
            <FooterMenuEl>
              <NavLink to="/movies">Movies</NavLink>
            </FooterMenuEl>
          </NavFooter>
        </nav>
      </Footer>
    </>
  );
};

export default Layout;
