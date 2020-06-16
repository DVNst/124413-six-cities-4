import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card.jsx";

const offerWithMark = {
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

const offerWithoutMark = {
  id: 2,
  city: `Amsterdam`,
  placeName: `Wood and stone place`,
  type: `Private room`,
  price: 80,
  period: `night`,
  rating: 4.2,
  mark: ``,
  img: `img/room.jpg`,
  coordinates: [52.369553943508, 4.85309666406198],
};

it(`Render OfferCard with mark`, () => {
  const tree = renderer.create(
      <OfferCard
        offer={offerWithMark}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render OfferCard without mark`, () => {
  const tree = renderer.create(
      <OfferCard
        offer={offerWithoutMark}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
