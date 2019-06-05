import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
export default function About() {
  return (
    <div>
      <section className='resume-section p-3 p-lg-5 d-flex d-column' id='about'>
        <div className='my-auto'>
          <h1 className='mb-0'>
            <span className='text-primary'>Samyar Modabber</span>
          </h1>
          <div className='sub-title mb-5'>
            JavaScript full-stack Web Deleloper
          </div>
          <p className='mb-5 short-description'>
            As a web Developer, I'm a JavaScript deveveloper and I expert in
            Node.js, Reactjs, Expressjs, Sequelizejs and MongoDB. I worked with
            APIs and I have a experience in RESTfull API. I have passed a
            workshop in Oracle and Database in Iran.
            <br />
            Moreover, Before I worked with PHP (Laravel, Codeigniter,
            WordPress), JQuery, Ajax. Also workrd with basic web design tools as
            Bootstrap, W3.
          </p>
          <ul className='list-inline list-social-icons mb-0'>
            <li className='list-inline-item'>
              <a href='https://www.facebook.com/modabbersam' target="_blank">
                <span className='fa-stack fa-lg'>
                  <i className='fa fa-circle fa-stack-2x' />
                  <i className='fa fa-facebook fa-stack-1x fa-inverse' />
                </span>
              </a>
            </li>
            {/* <li className='list-inline-item'>
              <a to='/'>
                <span className='fa-stack fa-lg'>
                  <i className='fa fa-circle fa-stack-2x' />
                  <i className='fa fa-twitter fa-stack-1x fa-inverse' />
                </span>
              </a>
            </li> */}
            <li className='list-inline-item'>
              <a
                href='https://www.linkedin.com/in/samyarmodabber'
                target='_blank'
              >
                <span className='fa-stack fa-lg'>
                  <i className='fa fa-circle fa-stack-2x' />
                  <i className='fa fa-linkedin fa-stack-1x fa-inverse' />
                </span>
              </a>
            </li>
            <li className='list-inline-item'>
              <a href='https://github.com/samyarmodabber' target='_blank'>
                <span className='fa-stack fa-lg'>
                  <i className='fa fa-circle fa-stack-2x' />
                  <i className='fa fa-github fa-stack-1x fa-inverse' />
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
