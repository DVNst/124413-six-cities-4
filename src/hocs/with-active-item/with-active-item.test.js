import React from 'react';
import renderer from 'react-test-renderer';

import withActiveItem from './with-active-item.js';

const MockComponent = () => {
  return (
    <div />
  );
};

const withActiveItemWrapped = withActiveItem(MockComponent);

it(`Render withOpen`, () => {
  const tree = renderer.create(
      <withActiveItemWrapped
        activeItemId={null}
        onOfferCardHover={() => {}}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
