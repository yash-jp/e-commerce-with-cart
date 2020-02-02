import React,{Component} from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
// import FormInput from '../../components/form-input/demo.component';
import CustomButton from '../../components/custom-button/custom-button.component';

class SignIn extends Component{
  constructor(){
    super();
    this.state={
      email:'',
      password:''
    }
  }

  render(){
    return(
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
          label="Email"
          name="email" 
          type="email" 
          value={this.state.email} 
          handleChange={this.handleChange}
          required/>
          
          <FormInput
          label="Password"
          name="password"
          type="password" 
          value={this.state.password}
          handleChange={this.handleChange}
          required/>

          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    )
  }

  componentDidUpdate(){

  }

  handleSubmit = (event)=>{
    event.preventDefault();

    // clearing out the state
    this.setState({email:'',password:''});
  }

  handleChange = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    this.setState(
      {
        [name]:value
      }
    )
  }
}

export default SignIn;