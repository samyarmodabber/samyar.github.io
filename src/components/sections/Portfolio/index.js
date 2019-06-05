import React, { Component } from 'react';
import './Portfolio.css';
import Menu from './Menu';
import Item from './Item';

export default class Portfolio extends Component {
  // state={
  //    "Items":{
  //        'elbarg':{
  //            "name":"Elbarg",
  //             "URL":"http://elbarg.com",
  //             "type":"Wordpress",
  //             "tags":['CSS','HTML','Wocommerce']
  //        }

  //    }
  // }
  render() {
    return (
      <section className='resume-section p-3 p-lg-5 d-flex flex-column'>
        {/* <Menu/> */}
        <div className='col-12'>
          <h2 className='  text-center'>Portfolio</h2>
          <div className='mb-5 heading-border' />
        </div>
        <div className='row my-auto'>
          <div className='col-sm-4 portfolio-item filter marketing'>
            <h3>Elbarg.com</h3>
          </div>
          <div className='col-sm-4 portfolio-item filter consulting'>
            <h3>iran-souvenir.com</h3>
          </div>
          <div className='col-sm-4 portfolio-item filter consulting'>
            <h3>daneshad.ir</h3>
          </div>
        </div>
      </section>
    );
  }
}
