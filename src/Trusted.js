import React from 'react';
import styled from 'styled-components';

const Trusted = () => {
  return (
    <Wrapper className='brand-section'>
      <div className='container'>
        <h3>Trusted by 1000+ Companies</h3>
        <div className='brand-section-slider'>

            <div className='slide'>
            <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png" alt="trusted-brands"/>
            </div>

            <div className='slide'>
            <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png" alt="trusted-brands"/>
            </div>

            <div className='slide'>
            <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png" alt="trusted-brands"/>
            </div>
            

            <div className='slide'>
            <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png" alt="trusted-brands"/>
            </div>

            <div className='slide'>
            <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png" alt="trusted-brands"/>
            </div>

        </div>
        
      </div>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid {
    gap: 4.8rem;
  }

  .brand-section {
  padding:12rem 0 0 0;
  }

  h3 {
  text-align:center;
  text-transform:capitalize;
  color:${({theme}) => theme.colors.text};
  font-size:2rem;
  font-weight:bold;
}

  img {
  min-width:10rem;
  height:10rem;
}

  .brand-section-slider {
    margin-top:3.2rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:row;
  }

  .services-1,
  .services-2,
  .services-3 {
    width: auto;
    height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    background: ${({ theme }) => theme.colors.bg};
    text-align: center;
    border-radius: 2rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  }

  .services-2 {
    gap: 4rem;
    background-color: transparent;
    box-shadow: none;

    .services-colum-2 {
      background: ${({ theme }) => theme.colors.bg};
      display: flex;
      flex-direction: row;
      flex: 1;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;

      div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }
    }
  }

  h3 {
    margin-top: 1.4rem;
    font-size: 2rem;
  }

  .icon {
    /* font-size: rem; */
    width: 8rem;
    height: 8rem;
    padding: 2rem;
    border-radius: 50%;
    background-color: #fff;
    color: #5138ee;
  }
`;

export default Trusted;
