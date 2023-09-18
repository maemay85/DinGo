import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authenticate } from './authSlice';

const SignUp = () => {
  const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const username = evt.target.username.value;
    const firstname = evt.target.firstname.value;
    const lastname = evt.target.lastname.value;
    const email = evt.target.email.value;
    const password = evt.target.password.value;
    navigate('/home');
    dispatch(authenticate({ username, }));
  }

  return (
  <div>
    this is a placeholder for the signup component
  </div>
  )
}

export default SignUp
