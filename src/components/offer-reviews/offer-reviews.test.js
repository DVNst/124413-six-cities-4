import React from "react";
import renderer from "react-test-renderer";
import OfferReviews from "./offer-reviews.jsx";

const reviews = [
  {id: 1, offersId: 1, userName: `User1`, rating: 5, text: `description user 1`, dateTime: `December 31, 2020`},
  {id: 2, offersId: 1, userName: `User2`, rating: 4, text: `description user 2`, dateTime: `November 11, 2020`},
  {id: 3, offersId: 1, userName: `User3`, rating: 4, text: `description user 3`, dateTime: `October 10, 2020`},
  {id: 4, offersId: 1, userName: `User4`, rating: 4, text: `description user 4`, dateTime: `September 09, 2020`},
  {id: 5, offersId: 1, userName: `User5`, rating: 4, text: `description user 5`, dateTime: `August 08, 2020`},
  {id: 6, offersId: 1, userName: `User6`, rating: 4, text: `description user 6`, dateTime: `July 07, 2020`},
  {id: 7, offersId: 1, userName: `User7`, rating: 4, text: `description user 7`, dateTime: `June 06, 2020`},
  {id: 8, offersId: 1, userName: `User8`, rating: 4, text: `description user 8`, dateTime: `May 05, 2020`},
  {id: 9, offersId: 1, userName: `User9`, rating: 4, text: `description user 9`, dateTime: `April 04, 2020`},
  {id: 10, offersId: 1, userName: `User10`, rating: 4, text: `description user 10`, dateTime: `March 03, 2020`},
  {id: 11, offersId: 1, userName: `User11`, rating: 4, text: `description user 11`, dateTime: `February 02, 2020`},
  {id: 12, offersId: 1, userName: `User12`, rating: 4, text: `description user 12`, dateTime: `January 01, 2020`},
];

it(`Render OfferReviews`, () => {
  const tree = renderer.create(
      <OfferReviews
        reviews={reviews}
      />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
