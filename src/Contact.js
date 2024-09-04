import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    
    <Wrapper className='container'>
      <h2 className='common-heading'>Feel Free to Contact Us</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d104780.64286772769!2d77.0179303430258!3d28.388080805045952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1724995290874!5m2!1sen!2sin" 
      className='maping'
      width="100%" 
      height="400" 
      style={{border:"0"}}
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"></iframe>


      <div className='container'>
        <div className='contact-form'>
          <form action="https://formspree.io/f/xjkblzbl" method="POST" className='contact-inputs'>
            <input type='text' placeholder='Name' name="Name"alt='name' required autoComplete='off'/>
            <input type='email' placeholder='Email' name="Email"alt='email' required autoComplete='off'/>
            <textarea type='text' placeholder='Enter a Message' name='Message' alt='message' autoComplete='off'/>
            <input type='submit' value="Submit"/>          
          </form>
        </div>
      </div>
    </Wrapper>
  )
};



const Wrapper = styled.section `
max-width:50rem;
margin:auto;

.contact-inputs {
  display:flex;
  flex-direction:column;
  gap: 3rem;
}

.maping {
margin-bottom:15px;
}

input[type='submit'] {
  cursor: pointer;
  transition:all 0.2s;

  &:hover {
  background-color: ${({theme}) => theme.colors.white};
  border: 1px solid ${({theme}) => theme.colors.btn};
  color: ${({theme}) => theme.colors.btn};
  transform: scale(0.9);
  }
}

contact-form {
display:flex;
flex-direction:column;
display:flex;
flex-direction:column;
}

.common-heading {
justify-content:center;
align_items:center;
margin-top:25px;
margin-left:30px;
}

}
`;

export default Contact;
