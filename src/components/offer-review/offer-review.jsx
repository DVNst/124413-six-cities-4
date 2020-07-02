import React from 'react';
import PropTypes from 'prop-types';

const Offer = ({review}) => {
  const {userName, rating, text, dateTime} = review;
  const ratingStars = rating / 5 * 100;
  const reviewDate = new Date(dateTime);

  const _formatDate = (date) => {
    const addZeros = (data) => {
      return data < 10 ? `0` + data : data;
    };

    const dd = addZeros(date.getDate());
    const mm = addZeros(date.getMonth() + 1);
    const yyyy = date.getFullYear();

    return `${dd}-${mm}-${yyyy}`;
  };

  const _getDate = (date) => {
    const mm = date.toLocaleString(`en-US`, {month: `long`});
    const yyyy = date.getFullYear();

    return `${mm} ${yyyy}`;
  };

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg" width={54} height={54} alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {userName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${ratingStars}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {text}
        </p>
        <time className="reviews__time" dateTime={_formatDate(reviewDate)}>{_getDate(reviewDate)}</time>
      </div>
    </li>
  );
};

Offer.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    offersId: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    dateTime: PropTypes.string.isRequired,
  }).isRequired,
};

export default Offer;
