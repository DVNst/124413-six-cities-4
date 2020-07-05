import React from 'react';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {App} from './app.jsx';

const mockStore = configureStore([]);

Enzyme.configure({
  adapter: new Adapter(),
});

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
    city: `Amsterdam`,
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
    city: `Amsterdam`,
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
    city: `Amsterdam`,
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
    city: `Amsterdam`,
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

it(`Pressed on title offer returns the correct callback (offer screen)`, () => {
  const store = mockStore({});

  const appScreen = mount(
      <Provider store={store}>
        <App
          cities={cities}
          offers={offers}
          reviews={reviews}
          cityActive={cityActive}
          onLocationClick={() => {}}
        />
      </Provider>
  );

  expect(appScreen.find(`.page__main--index`).length).toBe(1);
  expect(appScreen.find(`.page__main--property`).length).toBe(0);

  const firstOfferTitle = appScreen.find(`.place-card__name a`).at(1);
  firstOfferTitle.simulate(`click`);

  expect(appScreen.find(`.page__main--index`).length).toBe(0);
  expect(appScreen.find(`.page__main--property`).length).toBe(1);
});
