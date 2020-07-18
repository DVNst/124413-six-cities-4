import React from 'react';
import PropTypes from 'prop-types';

const Offer = ({offer, onOfferTitleClick, onOfferCardHover, offerClassName}) => {
  const {placeName, type, price, period, rating, mark, img} = offer;
  const ratingStars = rating / 5 * 100;

  const articleClassName = (offerClassName === `cities`) ? `${offerClassName}__place-card` : `${offerClassName}__card`;

  return (
    <article
      className={articleClassName + ` place-card`}
      onMouseOver={() => onOfferCardHover(offer.id)}
      onMouseOut={() => onOfferCardHover(null)}
    >
      {mark &&
        <div className="place-card__mark">
          <span>{mark}</span>
        </div>
      }
      <div className={offerClassName + `__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={img} width={260} height={200} alt={placeName} />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">/&nbsp;{period}</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${ratingStars}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a
            href="#"
            onClick={() => onOfferTitleClick(offer)}
          >
            {placeName}
          </a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>

  );
};

Offer.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number,
    city: PropTypes.string,
    placeName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    period: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    mark: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
  }).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  onOfferCardHover: PropTypes.func.isRequired,
  offerClassName: PropTypes.string.isRequired,
};

export default Offer;
