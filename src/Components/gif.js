import React, { Component } from 'react';

export default class Gif extends Component{

  swapGif(index){
    this.props.makeItMove(index)
  }

  render(){
if(this.props.data.movingOrNOt === false){
    return (

      <img src={this.props.data.images.downsized_still.url} onClick={this.swapGif(this.props.myIndex)}/>
      )
    }
      else {
          return <img src={this.props.data.images.downsized_medium.url} onClick={this.swapGif(this.props.myIndex)}/>
      }
  }
}
