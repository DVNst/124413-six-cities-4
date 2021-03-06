import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

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

const cityActive = {name: `Paris`, coordinates: [1, 1]};

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

const optionSortingActive = `Popular`;
const activeItemId = 101;

it(`Should title offer be pressed`, () => {
  const onOfferTitleClick = jest.fn();

  const mainScreen = mount(
      <Main
        cities={cities}
        offers = {offers}
        onOfferTitleClick={onOfferTitleClick}
        cityActive={cityActive}
        onLocationClick={() => {}}
        onSortOptionClick={() => {}}
        onOfferCardHover={() => {}}
        optionSortingActive={optionSortingActive}
        activeItemId={activeItemId}
      />
  );

  const firstOfferTitle = mainScreen.find(`.place-card__name a`).first();
  firstOfferTitle.simulate(`click`);

  expect(onOfferTitleClick.mock.calls.length).toBe(1);
});
