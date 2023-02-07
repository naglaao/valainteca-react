import React from 'react';
import { Fragment, Component } from 'react'
import './Succeed.css'

class Succeed extends Component {
     
    render() { 
      const email = localStorage.getItem('email')

        return (
        <>
            <div className='img'><img src='assets/03.png' alt='' /></div>
            <div className='head-subhead-succeed'>
              <div className='empty'></div>
              <h1 className='head-succeed'>Successfully logged in</h1>
              <h2 className='subhead-succeed'>{email}</h2>
            </div>
            
        </>
        );
    }
}
 
export default Succeed;