import React, { Component } from 'react';

export default class Gorilla extends Component{
  handleChange(event){


      this.props.updateSearch(event.target.value)
    
  }


  render(){
    return(
      <input type='text' onChange={this.handleChange.bind(this)}/>
    )
  }


}
