import React from 'react';
import { SubHeading } from '../../components';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className='app__wrapper_info'>
      <SubHeading title="Le gros titre mon gars" />
      <h1 className='app__header-h1'>Le titre mon gars</h1>
      <p className='p__opensans' style={ {margin: '2rem 0'} }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tristique ac justo fermentum pellentesque. Pellentesque finibus aliquam urna a tempor. Morbi dignissim ipsum at vehicula tincidunt. Morbi venenatis vehicula leo non ullamcorper. Praesent non tellus pulvinar, mollis dolor et, tempus ipsum. Nulla eget congue nulla. Donec vestibulum ultrices luctus. Donec auctor congue nisi, a molestie tellus tincidunt vel. Quisque velit lacus, ullamcorper ut imperdiet sodales, tristique fringilla nisl.</p>
      <button type='button' className='custom__button'>Explore menu</button>
    </div>

    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
