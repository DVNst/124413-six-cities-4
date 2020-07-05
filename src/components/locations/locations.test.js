import React from 'react';
import renderer from 'react-test-renderer';
import Locations from './locations.jsx';

const cities = [
  {name: `Paris`, coordinates: [1, 1]},
  {name: `Cologne`, coordinates: [2, 2]},
  {name: `Brussels`, coordinates: [3, 3]},
  {name: `Amsterdam`, coordinates: [4, 4]},
  {name: `Hamburg`, coordinates: [5, 5]},
  {name: `Dusseldorf`, coordinates: [6, 6]},
];

const cityActive = {name: `Paris`, coordinates: [1, 1]};

it(`Render Locations`, () => {
  const tree = renderer.create(
      <Locations
        cities={cities}
        cityActive={cityActive}
        onLocationClick={() => {}}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
