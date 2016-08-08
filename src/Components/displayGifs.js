import React, { Component } from 'react';
import Gif from './gif.js'

export default class Gifs extends Component{
  constructor(props){
    super(props)

  }


  render(){
    return(
      <div>
        {this.props.gifs.map((gif, index) => {
            return <div> <Gif data={gif} key = {index}/> </div>
        }, this)
        }
      </div>


    )
  }

}
