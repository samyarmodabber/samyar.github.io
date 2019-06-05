import React, { Fragment } from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css';

export default function navbar() {
  return (
    <Fragment>
      <nav
        className='navbar navbar-expand-lg navbar-dark bg-primary fixed-top'
        id='sideNav'
      >
        <Link className='navbar-brand js-scroll-trigger' to='/'>
          {/* <span className='d-block d-lg-none mx-0 px-0'>
            <img src='img/profile.jpg' alt='' className='img-fluid'></img>
          </span> */}
          <span className='d-none d-lg-block'>
            <img
              className='img-fluid img-profile rounded-circle mx-auto mb-2'
              src='img/profile.jpg'
              alt=''
            />
          </span>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link js-scroll-trigger' to='/'>
                About
              </Link>
            </li>
            <Link className='nav-item'>
              <Link className='nav-link js-scroll-trigger' to='/experience'>
                Experience
              </Link>
            </Link>
            <li className='nav-item'>
              <Link className='nav-link js-scroll-trigger' to='/portfolio'>
                Portfolio
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link js-scroll-trigger' to='/skills'>
                Skills
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link js-scroll-trigger' to='/awards'>
                Awards
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link js-scroll-trigger' to='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>
  );
}
