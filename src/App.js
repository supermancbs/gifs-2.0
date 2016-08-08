import React, { Component } from 'react';
import './App.css';
import SearchBar from './Components/searchBar.js'
import Gifs from './Components/displayGifs.js'
import Jquery from 'jquery'

const api_key= "&api_key=dc6zaTOxFJmzC"
const url= "http://api.giphy.com/v1/gifs/search?q="

class App extends Component {
  constructor(props){
    super(props)
    this.state = {searchTerm: "", requestAjax: []}
  }

  handleChange(searchTerm){
    this.setState({searchTerm})

    Jquery.ajax({
        Method:'GET',
        url: url + searchTerm + api_key
      }
    ).done((response)=>{
        this.changeNow(response.data.slice(0, 10))
      })
  }

  makeItMove(index){
    var ajaxObj = this.state.requestAjax
    ajaxObj[index].movingOrNOt = !ajaxObj[index].movingOrNOt
    this.setState({requestAjax: ajaxObj})
  }

  changeNow(input){
    var requestAjax  = input.map((request) => { request.movingOrNOt = false
      return request})
    this.setState({requestAjax})
  }



  render() {
    return (
      <div className="App">
        <div className="App-header">

        </div>
        <p className="App-intro">
            <SearchBar updateSearch={this.handleChange.bind(this)}/>
            <Gifs gifs={this.state.requestAjax} makeItMove = {this.makeItMove.bind(this)}/>

            <p>{this.state.searchTerm}</p>
        </p>
      </div>
    );
  }
}

export default App;
