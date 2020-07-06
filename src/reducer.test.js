import {reducer, ActionType, ActionCreator} from './reducer.js';

const cities = [
  {name: `Paris`, coordinates: [48.85341, 2.3488]},
  {name: `Cologne`, coordinates: [50.93333, 6.95]},
  {name: `Brussels`, coordinates: [50.85045, 4.34878]},
  {name: `Amsterdam`, coordinates: [52.38333, 4.9]},
  {name: `Hamburg`, coordinates: [53.57532, 10.01534]},
  {name: `Dusseldorf`, coordinates: [51.22172, 6.77616]},
];

const initialState = {
  cities: {name: `Paris`, coordinates: [48.85341, 2.3488]},
  offers: [
    {
      id: 11,
      city: `Paris`,
      placeName: `City studio -Hotel de Ville Paris 4`,
      type: `Apartment`,
      price: 69,
      period: `night`,
      rating: 4.5,
      mark: `Premium`,
      img: `img/apartment-01.jpg`,
      coordinates: [48.858638, 2.316295],
    }, {
      id: 12,
      city: `Paris`,
      placeName: `Direct view of Notre Dame Cathedal`,
      type: `Private room`,
      price: 102,
      period: `night`,
      rating: 4.9,
      mark: ``,
      img: `img/room.jpg`,
      coordinates: [48.867564, 2.331307],
    }, {
      id: 13,
      city: `Paris`,
      placeName: `Studio 20m2 Ile Saint Louis - historical center`,
      type: `Apartment`,
      price: 89,
      period: `night`,
      rating: 4.9,
      mark: ``,
      img: `img/apartment-02.jpg`,
      coordinates: [48.858163, 2.362487],
    }, {
      id: 14,
      city: `Paris`,
      placeName: `Notre Dame - Beneath Paris Rooftops`,
      type: `Apartment`,
      price: 140,
      period: `night`,
      rating: 4.7,
      mark: `Premium`,
      img: `img/apartment-03.jpg`,
      coordinates: [48.850958, 2.350929],
    }, {
      id: 15,
      city: `Paris`,
      placeName: `Direct view of Jardin des Plantes`,
      type: `Apartment`,
      price: 109,
      period: `night`,
      rating: 3.7,
      mark: `Premium`,
      img: `img/apartment-03.jpg`,
      coordinates: [48.842110, 2.353682],
    },
    {
      id: 41,
      city: `Amsterdam`,
      placeName: `Beautiful & luxurious apartment at great location`,
      type: `Apartment`,
      price: 120,
      period: `night`,
      rating: 4.8,
      mark: `Premium`,
      img: `img/apartment-01.jpg`,
      coordinates: [52.3909553943508, 4.85309666406198],
    }, {
      id: 42,
      city: `Amsterdam`,
      placeName: `Wood and stone place`,
      type: `Private room`,
      price: 80,
      period: `night`,
      rating: 4.2,
      mark: ``,
      img: `img/room.jpg`,
      coordinates: [52.369553943508, 4.85309666406198],
    }, {
      id: 43,
      city: `Amsterdam`,
      placeName: `Canal View Prinsengracht`,
      type: `Apartment`,
      price: 132,
      period: `night`,
      rating: 4.7,
      mark: ``,
      img: `img/apartment-02.jpg`,
      coordinates: [52.3909553943508, 4.929309666406198],
    }, {
      id: 44,
      city: `Amsterdam`,
      placeName: `Nice, cozy, warm big bed apartment`,
      type: `Apartment`,
      price: 180,
      period: `night`,
      rating: 5,
      mark: `Premium`,
      img: `img/apartment-03.jpg`,
      coordinates: [52.3809553943508, 4.939309666406198],
    },
  ],
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {}))
    .toEqual({
      cityActive: initialState.cities,
      offers: initialState.offers,
    });
});

it(`Reducer should change the active city by a given value`, () => {
  expect(reducer({
    cityActive: initialState.cities,
    offers: initialState.offers,
  }, {
    type: ActionType.SELECT_CITY,
    payload: cities[3],
  })).toEqual({
    cityActive: cities[3],
    offers: initialState.offers,
  });

  expect(reducer({
    cityActive: initialState.cities,
    offers: initialState.offers,
  }, {
    type: ActionType.SELECT_CITY,
    payload: cities[0],
  })).toEqual({
    cityActive: initialState.cities,
    offers: initialState.offers,
  });
});

it(`Reducer should change offer to match the value of city`, () => {
  expect(reducer({
    cityActive: initialState.cities,
    offers: initialState.offers,
  }, {
    type: ActionType.GET_OFFERS,
    payload: null,
  })).toEqual({
    cityActive: initialState.cities,
    offers: initialState.offers,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for select city returns correct action`, () => {
    expect(ActionCreator.selectCity({
      name: `Paris`,
      coordinates: [48.85341, 2.3488]
    })).toEqual({
      type: ActionType.SELECT_CITY,
      payload: {
        name: `Paris`,
        coordinates: [48.85341, 2.3488]
      },
    });
  });

  it(`Action creator for get offers returns correct action`, () => {
    expect(ActionCreator.getOffers({
      name: `Paris`,
      coordinates: [48.85341, 2.3488]
    })).toEqual({
      type: ActionType.GET_OFFERS,
      payload: {
        name: `Paris`,
        coordinates: [48.85341, 2.3488]
      },
    });
  });
});
