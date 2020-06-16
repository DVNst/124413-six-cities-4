import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Offer from "./offer.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

const offer = {
  id: 1,
  city: `Amsterdam`,
  placeName: `Beautiful & luxurious apartment at great location`,
  type: `Apartment`,
  price: 120,
  period: `night`,
  rating: 4.8,
  mark: `Premium`,
  img: `img/apartment-01.jpg`,
  coordinates: [52.3909553943508, 4.85309666406198],
};

it(`Should title offer be pressed`, () => {
  const onOfferTitleClick = jest.fn();

  const offerCart = mount(
      <Offer
        offer = {offer}
        onOfferTitleClick={onOfferTitleClick}
        onOfferCardHover={() =>{}}
      />
  );

  const OfferTitle = offerCart.find(`.place-card__name a`);
  OfferTitle.simulate(`click`);

  expect(onOfferTitleClick.mock.calls.length).toBe(1);
});
