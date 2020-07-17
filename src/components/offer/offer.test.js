import React from 'react';
import renderer from 'react-test-renderer';
import Offer from './offer.jsx';

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

const offerClassName = `cities`;

it(`Render Offer with mark`, () => {
  const tree = renderer.create(
      <Offer
        offer={offerWithMark}
        onOfferTitleClick={() =>{}}
        onOfferCardHover={() =>{}}
        offerClassName={offerClassName}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Render Offer without mark`, () => {
  const tree = renderer.create(
      <Offer
        offer={offerWithoutMark}
        onOfferTitleClick={() =>{}}
        onOfferCardHover={() =>{}}
        offerClassName={offerClassName}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
