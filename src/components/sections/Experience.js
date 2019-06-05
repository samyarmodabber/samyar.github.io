import React from 'react';
import './Experience.css';

export default function Experience() {
  return (
    <section className='resume-section p-3 p-lg-5 ' id='experience'>
      <div className='row my-auto'>
        <div className='col-12'>
          <h2 className='text-center'>Experience</h2>
          <div className='mb-5 heading-border' />
        </div>
        {/* Hack your Future */}
        <div className='resume-item col-md-6 col-sm-12 '>
          <div
            className='card mx-0 p-4 mb-5'
            style={{
              'border-color': '#17a2b8',
              'box-shadow': '2px 2px 2px rgba(0, 0, 0, 0.21);'
            }}
          >
            <div className=' resume-content mr-auto'>
              <h4 className='mb-3'>
                <i className='fa fa-code mr-3 text-info' /> JavaScript
                Developer
              </h4>
              <p>
                I colaborate with other student of HYF on a project of
                Copenhagen University podcast as a final project of{' '}
                <a href='https://www.hackyourfuture.dk/' target='_blank'>
                  Hack Your Future{' '}
                </a>{' '}
                course. Fundamentaly we work with Nodejs and Reactjs.
              </p>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>January 2019 - Present</span>
            </div>
          </div>
        </div>
        {/* Farnudan */}
        <div className='resume-item col-md-6 col-sm-12'>
          <div
            className='card mx-0 p-4 mb-5'
            style={{
              'border-color': '#ffc107',
              'box-shadow': '2px 2px 2px rgba(0, 0, 0, 0.21)'
            }}
          >
            <div className='resume-content mr-auto'>
              <h4 className='mb-3'>
                <i className='fa fa-laptop mr-3 text-warning' />
                Freelancer Web Developer
              </h4>
              <p>I made sevral wordpress websites.</p>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>Feburay 2018 - December 2018</span>
            </div>
          </div>
        </div>
        {/* RentSafe.dk */}
        <div className='resume-item col-md-6 col-sm-12'>
          <div
            className='card mx-0 p-4 mb-5'
            style={{
              'border-color': '#28a745',
              'box-shadow': '2px 2px 2px rgba(0, 0, 0, 0.21)'
            }}
          >
            <div className='resume-content mr-auto'>
              <h4 className='mb-3'>
                <i className='fa fa-home mr-3 text-success' /> RentSafe.dk
              </h4>
              <p>
                I worked in a project as a Full-stack developer for {' '}
                <a href='https://www.rently.dk' target='_blank'>
                  RentSafe.dk
                </a>
                . that the company name changes to Rently
              </p>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>July 2017 - January 2018</span>
            </div>
          </div>
        </div>
        {/* Wordpress */}
        <div className='resume-item col-md-6 col-sm-12'>
          <div
            className='card mx-0 p-4 mb-5'
            style={{
              'border-color': '#28a745',
              'box-shadow': '2px 2px 2px rgba(0, 0, 0, 0.21)'
            }}
          >
            <div className='resume-content mr-auto'>
              <h4 className='mb-3'>
                <i className='fa fa-wordpress mr-3 text-success' /> Wordpress
                Developer
              </h4>
              <p>
                I collaborated on miscellaneous projects for banks, oil
                companies, official and industrial organizations as well as
                personal websites.
              </p>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>October 2016 - June 2017</span>
            </div>
          </div>
        </div>
        {/* Mathematics */}
        <div className='resume-item col-md-6 col-sm-12'>
          <div
            className='card mx-0 p-4 mb-5'
            style={{
              'border-color': '#2196f3',
              'box-shadow': '2px 2px 2px rgba(0, 0, 0, 0.21);'
            }}
          >
            <div className='resume-content mr-auto'>
              <h4 className='mb-3'>
                <i className='fa fa-university mr-3 text-primary' /> Instructor
              </h4>
              <p>
                I have been instructor in five Iranian universities in which I
                taught courses in mathematics, statistic, and Computer Science.
                I have handled students’ dissertations and projects as a
                supervisor or an advisor by helping them using software like
                SPSS, LISREL, Matlab, Maple, Expert Choice, Flash MX, C++,
                Pascal, and TORA.{' '}
              </p>
            </div>
            <div className='resume-date text-md-right'>
              <span className='text-primary'>
                September 2009 - September 2016
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
