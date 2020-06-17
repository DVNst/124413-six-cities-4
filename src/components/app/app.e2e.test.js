import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./app.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const offersCount = 312;

const cities = [
  {name: `Paris`, active: false},
  {name: `Cologne`, active: false},
  {name: `Brussels`, active: false},
  {name: `Amsterdam`, active: true},
  {name: `Hamburg`, active: false},
  {name: `Dusseldorf`, active: false},
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

it(`Pressed on title offer returns the correct callback (offer screen)`, () => {
  const appScreen = mount(
      <App
        cities={cities}
        offersCount={offersCount}
        offers = {offers}
      />
  );

  expect(appScreen.state(`offerScreen`)).toBe(false);
  expect(appScreen.find(`.page__main--index`).length).toBe(1);
  expect(appScreen.find(`.page__main--property`).length).toBe(0);

  const firstOfferTitle = appScreen.find(`.place-card__name a`).at(1);
  firstOfferTitle.simulate(`click`);

  expect(appScreen.state(`offerScreen`)).toBe(offers[1]);
  expect(appScreen.find(`.page__main--index`).length).toBe(0);
  expect(appScreen.find(`.page__main--property`).length).toBe(1);
});
