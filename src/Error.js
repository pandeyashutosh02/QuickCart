import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from './styles/Button';

const Error = () => {
  return (
    <Wrapper>
      <div className='main-section'>
        <div className='under-section'>
          <h1>OH! 404</h1>
          <h3>Page not found.</h3>
          <NavLink to='/home'>
            <Button className='btn'>HOME</Button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  )
};


const Wrapper = styled.section`



.main-section {
justify-content:center;
padding:20px;
margin-left:600px;
}

.under-section h3{
margin-left:90px;
margin-bottom:3vh;
}

.btn {
margin-left:100px;}

`;


export default Error;
