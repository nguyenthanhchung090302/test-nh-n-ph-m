import React, { Component } from "react";

class Result extends Component {
  render() {
    let { profilefigure, name, nickname, birthday, portrayed } = this.props;
    return (
      <>
        <div className='flip-card'>
          <div className='flip-card'>
            <div className='flip-card-inner'>
              <div className='flip-card-front'>
                <img src={profilefigure.img} alt='Avatar' />
              </div>
              <div className='flip-card-back'>
                <h1>{profilefigure.name}</h1>
                <p>{profilefigure.nickname}</p>
                <p>{profilefigure.birthday}</p>
                <p>{profilefigure.portrayed}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Result;
