import React from "react";
import PropTypes from "prop-types";

const Locations = ({cities}) => {
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
                  (city.active ? ` tabs__item--active` : ``)
                }
                href="#"
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
    active: PropTypes.bool.isRequired,
  })).isRequired,
};

export default Locations;
