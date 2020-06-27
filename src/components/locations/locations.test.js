import React from "react";
import renderer from "react-test-renderer";
import Locations from "./locations.jsx";

const cities = [
  {name: `Paris`, coordinates: [1, 1], active: false},
  {name: `Cologne`, coordinates: [2, 2], active: false},
  {name: `Brussels`, coordinates: [3, 3], active: false},
  {name: `Amsterdam`, coordinates: [4, 4], active: true},
  {name: `Hamburg`, coordinates: [5, 5], active: false},
  {name: `Dusseldorf`, coordinates: [6, 6], active: false},
];

it(`Render Locations`, () => {
  const tree = renderer.create(
      <Locations
        cities={cities}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
