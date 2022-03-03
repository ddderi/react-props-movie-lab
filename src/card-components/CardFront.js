import React, { Component } from 'react';
import { replaceDuplicates } from 'webpack/lib/ModuleFilenameHelpers';
import { posterMap } from './MovieCard'

export default class CardFront extends Component {

  render() {
    return (
      <div className="card-front" style={{backgroundImage: `url(${posterMap[(this.props.movie.poster).replaceAll(' ', '-')]} )`}}   ></div>                                   
      
      // ${(this.props.movie.poster).replaceAll(' ', '-')}
    )
  }
}


