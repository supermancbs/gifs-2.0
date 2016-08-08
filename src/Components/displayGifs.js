import React, { Component } from 'react';
import Gif from './gif.js'

export default class Gifs extends Component{
  constructor(props){
    super(props)
    this.state = {url: "", moving: false}
  }

  changeMovingValue(){
    this.setState({moving: !this.state.moving})
  }

  render(){
    return(
      <div>
        {this.props.gifs.map((gif, index) => {
            return <div> <Gif data={gif} moving ={this.state.moving} myIndex = {index} makeItMove ={this.props.makeItMove.bind(this)} changeMovingValue = {this.changeMovingValue.bind(this)}/> </div>
        }, this)
        }
      </div>


    )
  }

}
