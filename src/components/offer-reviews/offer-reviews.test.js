import React from "react";
import renderer from "react-test-renderer";
import OfferReviews from "./offer-reviews.jsx";

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

it(`Render OfferReviews`, () => {
  const tree = renderer.create(
      <OfferReviews
        reviews={reviews}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
