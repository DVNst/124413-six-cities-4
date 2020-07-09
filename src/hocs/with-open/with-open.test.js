import React from 'react';
// import PropTypes from 'prop-types';
import renderer from 'react-test-renderer';

import withOpen from './with-open.js';

// const offers = [
//   {
//     id: 101,
//     city: `Amsterdam`,
//     placeName: `Luxury loft 15 min from Amsterdam Central Station`,
//     type: `Apartment`,
//     price: 100,
//     period: `night`,
//     rating: 4.5,
//     mark: `Premium`,
//     img: `img/apartment-01.jpg`,
//     coordinates: [52, 4],
//   }, {
//     id: 202,
//     city: `Amsterdam`,
//     placeName: `Budget Twin Studio with Street Art in Amsterdam`,
//     type: `Private room`,
//     price: 50,
//     period: `night`,
//     rating: 3.8,
//     mark: ``,
//     img: `img/room.jpg`,
//     coordinates: [52.1, 4.1],
//   }, {
//     id: 303,
//     city: `Amsterdam`,
//     placeName: `Generator - Bed in 4 bed Dorm`,
//     type: `Apartment`,
//     price: 35,
//     period: `night`,
//     rating: 4.3,
//     mark: ``,
//     img: `img/apartment-02.jpg`,
//     coordinates: [52.2, 4.2],
//   }, {
//     id: 404,
//     city: `Amsterdam`,
//     placeName: `Houseboot Amsterdam`,
//     type: `Apartment`,
//     price: 67,
//     period: `night`,
//     rating: 5,
//     mark: `Premium`,
//     img: `img/apartment-03.jpg`,
//     coordinates: [52.3, 4.3],
//   }
// ];

const MockComponent = () => {
  // const {offers, optionSortingActive, onSortOptionClick} = props;

  return (
    <div />
  );
};

// MockComponent.propTypes = {
//   offers: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     city: PropTypes.string.isRequired,
//     placeName: PropTypes.string.isRequired,
//     type: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     period: PropTypes.string.isRequired,
//     rating: PropTypes.number.isRequired,
//     mark: PropTypes.string.isRequired,
//     img: PropTypes.string.isRequired,
//     coordinates: PropTypes.arrayOf(PropTypes.number).isRequired
//   })).isRequired,
//   optionSortingActive: PropTypes.string.isRequired,
//   onSortOptionClick: PropTypes.func.isRequired,
// };

const withOpenWrapped = withOpen(MockComponent);

// const optionSortingActive = `Popular`;

it(`Render withOpen`, () => {
  const tree = renderer.create(
      <withOpenWrapped
        opened={false}
        onToggleShowMenu={() => {}}
        onCloseMenu={() => {}}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
