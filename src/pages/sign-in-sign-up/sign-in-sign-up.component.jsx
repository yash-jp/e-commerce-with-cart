import React from 'react';
import './sign-in-sign-up.styles.scss';

// signin component
import SignIn from '../../components/sign-in/sign-in.component';

const SignInAndSignUpPage = ()=>{
  return(
    <div>
      <h1>Sign In and Up Page</h1>
      <SignIn/>
    </div>
  )
}

export default SignInAndSignUpPage;