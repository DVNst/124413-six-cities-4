import React from 'react';
import renderer from 'react-test-renderer';

import SortingOptions from './sorting-options.jsx';

const optionSortingActive = `Popular`;

it(`Render SortingOptions`, () => {
  const tree = renderer.create(
      <SortingOptions
        optionSortingActive={optionSortingActive}
        onSortOptionClick={() => {}}
        opened={false}
        onToggleShowMenu={() => {}}
        onCloseMenu={() => {}}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
