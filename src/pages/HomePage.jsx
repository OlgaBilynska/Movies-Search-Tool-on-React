import { useEffect } from 'react';
// import axios from 'axios';

const Home = () => {
  useEffect(() => {
    const APIKey = '713e88f7db14c265e0543f2dd0843d0c';
    const options = {
      method: 'GET',
      headers: { accept: 'application/json' },
    };

    fetch(
      `https://${APIKey}.themoviedb.org/3/trending/all/day?language=en-US`,
      options
    )
      .then(response => response.json())
      .then(response => console.log('r', response))
      .catch(err => console.error(err));
  }, []);

  return <div>Home Page</div>;
};

export default Home;
