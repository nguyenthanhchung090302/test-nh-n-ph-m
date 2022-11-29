import React, { Component } from "react";
import Result from "./Result";
import SearchBox from "./SearchBox";

class CharactersContainer extends Component {
  render() {
    let { profilefigure } = this.props;
    return (
      <>
        <SearchBox />
        <div className='result'>
          {profilefigure.map((e, i) => (
            <Result profilefigure={e} key={i} />
          ))}
        </div>
      </>
    );
  }
}

export default CharactersContainer;
