import React from 'react';
import './Skills.css';

export default function Skills() {
  return (
    <section className=' d-flex flex-column' id='skills'>
      <div className='p-lg-5 p-3 skill-cover'>
        <div className='col-12'>
          <h2 className='text-center text-white'>Skills</h2>
          <div className='mb-5 heading-border' />
        </div>
        <h3 className='text-center text-white'>Coding Skills</h3>
        <div className='row text-center my-auto '>
          <div className='col-md-3 col-sm-6'>
            <div className='skill-item'>
              <i className='fa fa-html5 fa-5x' />
              <h2>
                <span className='counter'> 100 </span>
                <span>%</span>
              </h2>
              <p>HTML5</p>
            </div>
          </div>
          <div className='col-md-3 col-sm-6'>
            <div className='skill-item'>
              <i className='fa fa-css3 fa-5x' />
              <h2>
                <span className='counter'> 95 </span>
                <span>%</span>
              </h2>
              <p>CSS3</p>
            </div>
          </div>
          <div className='col-md-3 col-sm-6'>
            <div className='skill-item'>
              <i className='fa fa-code fa-5x' />
              <h2>
                <span className='counter'> 90 </span>
                <span>%</span>
              </h2>
              <p>JavaScript</p>
            </div>
          </div>
          <div className='col-md-3 col-sm-6'>
            <div className='skill-item'>
              <i className='fa fa-globe fa-5x' />
              <h2>
                <span className='counter'> 70 </span>
                <span>%</span>
              </h2>
              <p>React</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
