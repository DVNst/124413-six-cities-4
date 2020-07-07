import React from 'react';
import PropTypes from 'prop-types';

const Locations = ({cities, cityActive, onLocationClick}) => {
  cities.splice(6);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) =>
            <li
              key={city.name}
              className="locations__item"
            >
              <a
                className={
                  `locations__item-link tabs__item` +
                  (city.name === cityActive.name ? ` tabs__item--active` : ``)
                }
                href="#"
                onClick={() => onLocationClick(city)}
              >
                <span>{city.name}</span>
              </a>
            </li>
          )}
        </ul>
      </section>
    </div>
  );
};

Locations.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf[PropTypes.number],
  })).isRequired,
  cityActive: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coordinates: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  }),
  onLocationClick: PropTypes.func.isRequired,
};

export default Locations;
