import Trending from 'components/Trending/Trending';
import { HomeHeading, HomeContainer } from './HomePage.styled';

const Home = () => {
  return (
    <HomeContainer>
      <HomeHeading>TRENDING MOVIES</HomeHeading>
      <Trending />
    </HomeContainer>
  );
};

export default Home;
