import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Offer from './offer.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

const offer = {
  id: 1,
  city: `Amsterdam`,
  placeName: `Private room in a Apartment (close to schiphol)`,
  type: `Apartment`,
  price: 100,
  period: `night`,
  rating: 4.5,
  mark: `Premium`,
  img: `img/apartment-01.jpg`,
  coordinates: [52.39, 4.85],
};

const offerclassName = `cities`;

it(`Should title offer be pressed`, () => {
  const onOfferTitleClick = jest.fn();

  const offerCart = mount(
      <Offer
        offer = {offer}
        onOfferTitleClick={onOfferTitleClick}
        onOfferCardHover={() =>{}}
        offerclassName={offerclassName}
      />
  );

  const OfferTitle = offerCart.find(`.place-card__name a`);
  OfferTitle.simulate(`click`);

  expect(onOfferTitleClick.mock.calls.length).toBe(1);
});
