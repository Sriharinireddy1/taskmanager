import React, { useState } from 'react';
import './registration.scss';
import '../../styles/components/_button.scss';
import { useDispatch } from 'react-redux';
import { signin } from '../../redux/authSlice';





const Signin = () => {

  const dispatch = useDispatch();

  const [state,setState]= useState({
    email:'',
    password:'',
  });

  const handleChange= (e) =>{
    setState({
      ...state,
      [e.target.name] : e.target.value,
    });
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(
      signin({
      email: state.email,
      password : state.password,
    })
  );
  };

  return (
    <div className="signup-form">
      <div className="signup-form__wrapper">
        <form className='form' onSubmit={handleSubmit}>
            <h1>Sign In</h1>
          <div className="form-group">
            <input type='email' name='email' value={state.email} placeholder='Enter email'  onChange={handleChange} />
          </div>
          <div className="form-group">
            <input type='password' name='password' value={state.password} placeholder='Enter Password'   onChange={handleChange}/>
          </div>
          <div className="form-group">
            <button className='button'>Sign In</button>
          </div>
        </form>
      </div>
    </div>
  
  );
}

export default Signin;