import React from 'react'
import './Contact.css'
export default function Contact() {
    return (
        <section class="resume-section p-3 p-lg-5 d-flex flex-column">
        <div class="row my-auto" id="contact"> 
          <div class="col-md-8">
            <div class="contact-cont">
              <h3>CONTACT Me</h3>
              <div class="heading-border-light"></div>
              <p>Please contact me by email. also you can call me by Whatsapp or Skype.</p>
            </div>   
          </div>
          <div class="col-md-4 col-sm-12 mt-5"> 
            <div class="contact-cont2"> 
              <div class="contact-add contact-box-desc">
                <h3><i class="fa fa-map-marker cl-atlantis fa-2x"></i> Address</h3>
                <p>Copenhagen, Denmark </p>
              </div>
              <div class="contact-phone contact-side-desc contact-box-desc">
                <h3><i class="fa fa-phone cl-atlantis fa-2x"></i> Phone</h3>
                <p>71412348</p>
              </div>
              <div class="contact-mail contact-side-desc contact-box-desc">
                <h3><i class="fa fa-envelope-o cl-atlantis fa-2x"></i> Email</h3>
              <address class="address-details-f"> 
                Email: <a href="mailto:samyar.modabber@gmail.com" class="">samyar.modabber@gmail.com</a>
              </address>
              <ul class="list-inline social-icon-f top-data">
                <li><a href="/" target="_empty"><i class="fa top-social fa-facebook" style={{"color": "#4267b2", "border-color":"#4267b2"}}></i></a></li>
                <li><a href="/" target="_empty"><i class="fa top-social fa-twitter" style={{"color": "#4AB3F4", "border-color":"#4AB3F4;"}}></i></a></li>
                <li><a href="/" target="_empty"><i class="fa top-social fa-google-plus" style={{"color": "#e24343", "border-color":"#e24343;"}}></i></a></li> 
              </ul>
              </div>
            </div>
          </div> 
        </div>
    </section>
    )
}
