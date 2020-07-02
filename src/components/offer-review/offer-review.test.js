import React from 'react';
import renderer from 'react-test-renderer';
import OfferReview from './offer-review.jsx';

const review = {
  id: 1,
  offersId: 1,
  userName: `User1`,
  rating: 5,
  text: `description user 1`,
  dateTime: `April 10, 2020`,
};

it(`Render one OfferReview`, () => {
  const tree = renderer.create(
      <OfferReview
        review={review}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
