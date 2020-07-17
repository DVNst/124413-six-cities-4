import React from 'react';
import PropTypes from 'prop-types';

import {filteredOffers} from '../../utils.js';

import Header from '../header/header.jsx';
import Locations from '../locations/locations.jsx';
import Offers from '../offers/offers.jsx';
import Map from '../map/map.jsx';

import SortingOptions from '../sorting-options/sorting-options.jsx';
import withOpen from '../../hocs/with-open/with-open.js';
import withActiveItem from '../../hocs/with-active-item/with-active-item.js';

const SortingOptionsWrapper = withOpen(SortingOptions);

const Main = ({cities, offers, onOfferTitleClick, cityActive, onLocationClick, optionSortingActive, onSortOptionClick, activeItemId, onOfferCardHover}) => {
  const offersCount = offers.length;
  const empty = (offersCount <= 0);
  const offersSorting = filteredOffers(offers, optionSortingActive);

  return (
    <React.Fragment>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
      </div>
      <div className="page page--gray page--main">
        <Header />
        <main className=
          {`page__main page__main--index` +
          ((empty) ? ` page__main--index-empty` : ``)}
        >
          <h1 className="visually-hidden">Cities</h1>
          <Locations
            cities={cities}
            cityActive={cityActive}
            onLocationClick={onLocationClick}
          />
          <div className="cities">
            <div className=
              {`cities__places-container container` +
              ((empty) ? ` cities__places-container--empty` : ``)}
            >
              {(!empty) ?
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offersCount} places to stay in {cityActive.name}</b>
                  <SortingOptionsWrapper
                    optionSortingActive={optionSortingActive}
                    onSortOptionClick={onSortOptionClick}
                  />
                  <div className="cities__places-list places__list tabs__content">
                    <Offers
                      offers={offersSorting}
                      onOfferTitleClick={onOfferTitleClick}
                      onOfferCardHover={onOfferCardHover}
                      offerclassName={`cities`}
                    />
                  </div>
                </section>
                :
                <section className="cities__no-places">
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">We could not find any property availbale at the moment in Dusseldorf</p>
                  </div>
                </section>
              }
              <div className="cities__right-section">
                {(!empty) &&
                  <section className="cities__map map">
                    <Map
                      coordinates={cityActive.coordinates}
                      offers={offers}
                      offerActive={activeItemId}
                    />
                  </section>
                }
              </div>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number),
  })).isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    city: PropTypes.string.isRequired,
    placeName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    period: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    mark: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
  })).isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  cityActive: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  }),
  onLocationClick: PropTypes.func.isRequired,
  onSortOptionClick: PropTypes.func.isRequired,
  optionSortingActive: PropTypes.string.isRequired,
  activeItemId: PropTypes.number,
  onOfferCardHover: PropTypes.func.isRequired,
};

export {Main};

export default withActiveItem(Main);
