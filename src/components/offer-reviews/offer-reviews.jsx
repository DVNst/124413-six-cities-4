import React from "react";
import PropTypes from "prop-types";

import OfferReview from "../offer-review/offer-review.jsx";

const OfferReviews = ({reviews}) => {
  return (
    <ul className="reviews__list" >
      {reviews.map((review) =>
        <OfferReview
          key={review.id}
          review={review}
        />
      )}
    </ul>
  );
};

OfferReviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    offersId: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    dateTime: PropTypes.string.isRequired,
  })).isRequired,
};

export default OfferReviews;
