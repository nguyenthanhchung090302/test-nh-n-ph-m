import React, { Component } from "react";
import img from "../assets/logo.png";

class SearchBox extends Component {
  render() {
    return (
      <>
       <div className='trangchu'>
          <img src={img} className='logo' />
          <br />
          <input type='text' placeholder='search characters' />
        </div>
    </>
    );
  }
}

export default SearchBox;
