import React, { Component } from 'react';
import zero from '../assets/stars/0-stars.png'
import one from '../assets/stars/1-stars.png'
import two from '../assets/stars/2-stars.png'
import three from '../assets/stars/3-stars.png'
import four from '../assets/stars/4-stars.png'
import five from '../assets/stars/5-stars.png'

const imgMapper = {0: zero, 1: one, 2: two, 3: three, 4: four, 5: five}

export default class CardBack extends Component {

  generateRatingElement = (props) => {
    // implement meeeee! See the readme for instructions
     if(this.props.movie.IMDBRating==null){
        return <h4>No Rating Found</h4>
     }else{
       
       return <img src={imgMapper[this.props.movie.IMDBRating]} alt="" />
    }
     
  }

  render() {
    return (
      <div className="card-back">
        <h3 className="title">{this.props.movie.title}</h3>
        <p>
        
        {/* { this.props.movie.IMDBRating*/  this.generateRatingElement()  }
        </p>
        <h5 className="genres">{((this.props.movie.genres).toString()).replaceAll(',','/')}</h5>
      </div>
    )
  }
}
