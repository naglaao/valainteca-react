import React from 'react';
import { Fragment, Component } from 'react'
import './Welcome.css'
import { Link } from "react-router-dom";

class WelcomeScreen extends Component {
  state = {  } 
  render() { 
    return (
      <>
        <div className='img'><img src='assets/01.png' alt='' /></div>

        <section className='head-subhead-btn'>
          <section className='head-subhead-wlc-scr'>
            <h1 className='head-wlc-scr'>Welcome</h1>
            <h2 className='subhead-wlc-scr'>We’re glad you’re here! Sign up to start browsing the website.</h2>
          </section>

          <button className='btn'>
            <Link to='/signup' className='link'>
              Get Started
            </Link>
          </button>
        </section>
      </>
    );
  }
}
 
export default WelcomeScreen;