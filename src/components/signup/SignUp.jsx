import React from 'react';
import { Component } from 'react';
import './SignUp.css'
import Form from '../form/From';

class SignUp extends Component {
  state = {  }
  
  render() { 
    return (
            <>
            <div className='img'><img src='assets/02.png' alt='' /></div>

              <section className='head-subhead-form'>
                <section className='head-subhead-sign-up'>
                    <h1 className='head-sign-up'>Create Account</h1>
                    <h2 className='subhead-sign-up'>Go ahead and sign up, let everyone know how awesome you are!</h2>
                </section>
                
                <Form />
                </section>
            </>
    );
  }
}
 
export default SignUp;