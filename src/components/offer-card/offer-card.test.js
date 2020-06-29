import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card.jsx";

const offerWithMark = {
  id: 1,
  city: `Amsterdam`,
  placeName: `Private room in a Apartment (close to schiphol)`,
  type: `Apartment`,
  price: 100,
  period: `night`,
  rating: 4.5,
  mark: `Premium`,
  img: `img/apartment-01.jpg`,
  coordinates: [52.39, 4.85],
};

const offerWithoutMark = {
  id: 2,
  city: `Amsterdam`,
  placeName: `Central stylish room at Vondelpark`,
  type: `Private room`,
  price: 70,
  period: `night`,
  rating: 4.0,
  mark: ``,
  img: `img/room.jpg`,
  coordinates: [52.36, 4.84],
};

const reviews = [
  {
    id: 1,
    offersId: 1,
    userName: `User1`,
    rating: 5,
    text: `description user 1`,
    dateTime: `April 10, 2020`,
  }, {
    id: 2,
    offersId: 1,
    userName: `User2`,
    rating: 4,
    text: `description user 2`,
    dateTime: `March 20, 2020`,
  },
];

it(`Render OfferCard with mark`, () => {
  const tree = renderer.create(
      <OfferCard
        offer={offerWithMark}
        reviews={reviews}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render OfferCard without mark`, () => {
  const tree = renderer.create(
      <OfferCard
        offer={offerWithoutMark}
        reviews={reviews}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
