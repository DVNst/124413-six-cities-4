import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import Header from "../header/header.jsx";
import Locations from "../locations/locations.jsx";
import Offers from "../offers/offers.jsx";
import Map from "../map/map.jsx";

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this._handleOfferCardHover = this._handleOfferCardHover.bind(this);

    this.state = {
      offerHover: null,
    };
  }

  _handleOfferCardHover(offer) {
    this.setState({
      offerHover: offer,
    });
  }

  render() {
    const {cities, offersCount, offers, onOfferTitleClick} = this.props;
    const cityActive = cities.find((city) => city.active);

    return (
      <React.Fragment>
        <div style={{display: `none`}}>
          <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z" /></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" /></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z" /></symbol></svg>
        </div>
        <div className="page page--gray page--main">
          <Header />
          <main className="page__main page__main--index">
            <h1 className="visually-hidden">Cities</h1>
            <Locations cities={cities} />
            <div className="cities">
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{offersCount} places to stay in Amsterdam</b>
                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by</span>
                    <span className="places__sorting-type" tabIndex={0}>
                      Popular
                      <svg className="places__sorting-arrow" width={7} height={4}>
                        <use xlinkHref="#icon-arrow-select" />
                      </svg>
                    </span>
                    {/* <ul className="places__options places__options--custom places__options--opened"> */}
                    <ul className="places__options places__options--custom">
                      <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                      <li className="places__option" tabIndex={0}>Price: low to high</li>
                      <li className="places__option" tabIndex={0}>Price: high to low</li>
                      <li className="places__option" tabIndex={0}>Top rated first</li>
                    </ul>
                    {/*
                <select class="places__sorting-type" id="places-sorting">
                  <option class="places__option" value="popular" selected="">Popular</option>
                  <option class="places__option" value="to-high">Price: low to high</option>
                  <option class="places__option" value="to-low">Price: high to low</option>
                  <option class="places__option" value="top-rated">Top rated first</option>
                </select>
                */}
                  </form>
                  <div className="cities__places-list places__list tabs__content">
                    <Offers
                      offers={offers}
                      onOfferTitleClick={onOfferTitleClick}
                      onOfferCardHover={this._handleOfferCardHover}
                      offerclassName={`cities`}
                    />
                  </div>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map
                      coordinates={cityActive.coordinates}
                      offers={offers}
                      offerActive={this.state.offerHover}
                    />
                  </section>
                </div>
              </div>
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

Main.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number),
    active: PropTypes.bool.isRequired,
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
  offersCount: PropTypes.number.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired
};

export default Main;
