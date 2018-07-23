import React, { Component } from 'react';
import Header from './header';

import Card from './card';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
       { Header('MadLibs', 'Fill out the feilds below and click the generate button to see the Mad Lib story.') }
       <Card />
      </div>
    );
  }
}