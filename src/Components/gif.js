import React, { Component } from 'react';

export default class Gif extends Component{


  render(){

    return (
      <img src={this.props.data.images.downsized_still.url}/>
      )
      }

}
