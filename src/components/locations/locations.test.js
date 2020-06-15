import React from "react";
import renderer from "react-test-renderer";
import Locations from "./locations.jsx";

const cities = [
  {name: `Paris`, active: false},
  {name: `Cologne`, active: false},
  {name: `Brussels`, active: false},
  {name: `Amsterdam`, active: true},
  {name: `Hamburg`, active: false},
  {name: `Dusseldorf`, active: false},
];

it(`Render Locations`, () => {
  const tree = renderer.create(
      <Locations
        cities={cities}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
