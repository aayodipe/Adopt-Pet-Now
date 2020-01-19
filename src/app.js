// import react and render from reactdom
import React from 'react'
import {render} from 'react-dom'
import Pet from './Pet';

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Pet adoption Made Easy'),

    React.createElement(Pet, {
      name: 'Bingo',
      type: 'Dog',
      text: 'This is a Dog that cares about the owner'
    }),

    React.createElement(Pet, {
      name: 'jackline',
      type: 'Cat',
      text: 'This is a Cat that cares about the owner'
    }),
    React.createElement(Pet, {
      name: 'manema',
      type: 'Bird',
      text: 'This is a Bird that can fly everywhere for the the owner'
    }),
    React.createElement(Pet, {
      name: 'Pretty'
    })
  ]);
};

render(React.createElement(App), document.getElementById('root'));
