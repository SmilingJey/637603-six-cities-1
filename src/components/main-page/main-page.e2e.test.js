import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MainPage} from './main-page.jsx';

configure({adapter: new Adapter()});

const mock = {
  places: [
    {
      id: 999,
      isPremium: true,
      picture: `test-image1.jpg`,
      price: 111,
      rating: 22,
      title: `Test title 1`,
      type: `Apartment`,
      coordinates: [52.3909553943508, 4.85309666406198],
      city: `City 1`
    },
    {
      id: 222,
      isPremium: false,
      picture: `test-image2.jpg`,
      price: 222,
      rating: 100,
      title: `Test title 2`,
      type: `Room`,
      coordinates: [52.3909553943508, 4.85309666406198],
      city: `City 1`
    },
  ],
  cities: [
    {
      name: `City1`,
      coordinates: [48.862824, 2.341914],
    },
    {
      name: `City2`,
      coordinates: [48.862824, 2.341914],
    },
  ]
};

it(`When user click on image set activePlace state `, () => {
  const {places, cities} = mock;
  const linkPrevention = jest.fn();
  const mainPage = mount(<MainPage
    places={places}
    cities={cities}
    activeCity={cities[0]}
    onCityClick={jest.fn()}
  />);

  const cardImage = mainPage.find(`.place-card__image-wrapper a`).at(0);
  cardImage.simulate(`click`, {preventDefault: linkPrevention});
  mainPage.update();
  expect(mainPage.state(`activePlace`)).toEqual(places[0]);
});
