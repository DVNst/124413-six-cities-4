import React from 'react';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';

import {App} from './app.jsx';

const mockStore = configureStore([]);

const cities = [
  {name: `Paris`, coordinates: [1, 1]},
  {name: `Cologne`, coordinates: [2, 2]},
  {name: `Brussels`, coordinates: [3, 3]},
  {name: `Amsterdam`, coordinates: [4, 4]},
  {name: `Hamburg`, coordinates: [5, 5]},
  {name: `Dusseldorf`, coordinates: [6, 6]},
];

const offers = [
  {
    id: 101,
    city: `Paris`,
    placeName: `Luxury loft 15 min from Amsterdam Central Station`,
    type: `Apartment`,
    price: 100,
    period: `night`,
    rating: 4.5,
    mark: `Premium`,
    img: `img/apartment-01.jpg`,
    coordinates: [52, 4],
  }, {
    id: 202,
    city: `Paris`,
    placeName: `Budget Twin Studio with Street Art in Amsterdam`,
    type: `Private room`,
    price: 50,
    period: `night`,
    rating: 3.8,
    mark: ``,
    img: `img/room.jpg`,
    coordinates: [52.1, 4.1],
  }, {
    id: 303,
    city: `Paris`,
    placeName: `Generator - Bed in 4 bed Dorm`,
    type: `Apartment`,
    price: 35,
    period: `night`,
    rating: 4.3,
    mark: ``,
    img: `img/apartment-02.jpg`,
    coordinates: [52.2, 4.2],
  }, {
    id: 404,
    city: `Paris`,
    placeName: `Houseboot Amsterdam`,
    type: `Apartment`,
    price: 67,
    period: `night`,
    rating: 5,
    mark: `Premium`,
    img: `img/apartment-03.jpg`,
    coordinates: [52.3, 4.3],
  }
];

const reviews = [
  {
    id: 1,
    offersId: 1,
    userName: `User1`,
    rating: 5,
    text: `description user 1`,
    dateTime: `January 10, 2020`,
  }, {
    id: 2,
    offersId: 1,
    userName: `User2`,
    rating: 4,
    text: `description user 2`,
    dateTime: `March 15, 2020`,
  }, {
    id: 3,
    offersId: 2,
    userName: `User3`,
    rating: 5,
    text: `description user 4`,
    dateTime: `April 20, 2020`,
  },
];

const cityActive = {name: `Paris`, coordinates: [1, 1]};
const optionSortingActive = `Popular`;

it(`Render App`, () => {
  const store = mockStore({});

  const tree = renderer.create(
      <Provider store={store}>
        <App
          cities={cities}
          offers={offers}
          reviews={reviews}
          cityActive={cityActive}
          onLocationClick={() => {}}
          onSortOptionClick={() => {}}
          optionSortingActive={optionSortingActive}
        />
      </Provider>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
