import React, { Component } from 'react';

export default class Gif extends Component{
  constructor(props){
    super(props)
    this.state = {url: this.props.data.images.original_still.url}
  }

  handleMouseOn(){
    this.setState({url: this.props.data.images.original.url})
  }

  handleMouseOff(){
    this.setState({url: this.props.data.images.original_still.url})
  }

componentWillReceiveProps(nextProps) {
  this.setState({
    url: nextProps.data.images.original_still.url
  });
}
  render(){

    return (
      <img src={this.state.url} onMouseOver={this.handleMouseOn.bind(this)} onMouseOut={this.handleMouseOff.bind(this)}/>
      )
  }

}
