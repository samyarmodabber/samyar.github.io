import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return (
      <div className='row my-auto'>
        {/* title */}
        <div className='col-md-12'>
          <div className='port-head-cont'>
            <button className='btn btn-general btn-green filter-b'>All</button>
            <button className='btn btn-general btn-green filter-b'>
              Wordpress
            </button>
            <button className='btn btn-general btn-green filter-b'>
              Nodejs
            </button>
            <button className='btn btn-general btn-green filter-b'>
              Graphics Design
            </button>
          </div>
        </div>
      </div>
    );
  }
}
