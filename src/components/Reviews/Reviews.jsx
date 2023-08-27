import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMoviesAPI } from 'services/APIservices';
import {
  ReviewHeading,
  ReviewItem,
  ReviewContainer,
  ReviewIcon,
} from './Reviews.styled';

const moviesAPI = getMoviesAPI();

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    moviesAPI.getReviews(movieId).then(res => {
      if (res.length === 0) {
        Notify.info(`Sorry, there're no reviews yet`);
      }

      setReviews(res);
    });
  }, [movieId]);

  const idN = nanoid();

  return (
    <>
      <ReviewHeading>Reviews of the movie:</ReviewHeading>
      <ReviewContainer>
        {reviews.length === 0 ? (
          <div>Sorry, we didn't find any reviews of this movie.</div>
        ) : (
          reviews.map(review => (
            <ReviewItem key={idN}>
              <ReviewIcon />
              {<ReviewContainer>{review.content}</ReviewContainer>}
            </ReviewItem>
          ))
        )}
      </ReviewContainer>
    </>
  );
};

export default Reviews;
