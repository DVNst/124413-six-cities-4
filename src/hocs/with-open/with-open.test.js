import React from 'react';
import renderer from 'react-test-renderer';

import withOpen from './with-open.js';

const MockComponent = () => {
  return (
    <div />
  );
};

const withOpenWrapped = withOpen(MockComponent);

it(`Render withOpen`, () => {
  const tree = renderer.create(
      <withOpenWrapped
        opened={false}
        onToggleShowMenu={() => {}}
        onCloseMenu={() => {}}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
