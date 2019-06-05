import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div className="col-sm-4 portfolio-item filter finance">
                <a className="portfolio-link" href="#portfolioModal4" data-toggle="modal">
                    <div className="caption-port">
                        <div className="caption-port-content">
                            <i className="fa fa-search-plus fa-3x"></i>
                        </div>
                    </div>
                    <img className="img-fluid" src="img/portfolio/p-4.jpg" alt=""></img>
                </a>
            </div>
        )
    }
}
