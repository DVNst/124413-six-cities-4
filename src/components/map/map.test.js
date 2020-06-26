import React from "react";
import renderer from "react-test-renderer";

import Map from "./map.jsx";

const offers = [
  {
    id: 101,
    city: `Amsterdam`,
    placeName: `placeName-1`,
    type: `Apartment`,
    price: 100,
    period: `night`,
    rating: 4.5,
    mark: `Premium`,
    img: `imgPath-1`,
    coordinates: [52, 4],
  }, {
    id: 202,
    city: `Amsterdam`,
    placeName: `placeName-2`,
    type: `Private room`,
    price: 50,
    period: `night`,
    rating: 3.8,
    mark: ``,
    img: `imgPath-2`,
    coordinates: [52.1, 4.1],
  }, {
    id: 303,
    city: `Amsterdam`,
    placeName: `placeName-3`,
    type: `Apartment`,
    price: 35,
    period: `night`,
    rating: 4.3,
    mark: ``,
    img: `imgPath-3`,
    coordinates: [52.2, 4.2],
  }, {
    id: 404,
    city: `Amsterdam`,
    placeName: `placeName-4`,
    type: `Apartment`,
    price: 67,
    period: `night`,
    rating: 5,
    mark: `Premium`,
    img: `imgPath-4`,
    coordinates: [52.3, 4.3],
  }
];

it(`Should Map render correctly`, () => {
  const tree = renderer.create(
      <Map
        offers={offers}
      />, {
        createNodeMock: () => document.createElement(`div`)
      })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
