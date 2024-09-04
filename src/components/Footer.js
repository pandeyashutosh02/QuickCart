import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
        <section className='contact-short'>
            <div className='grid grid-two-column'>
                <div>
                    <h3>Ready to get started ?</h3>
                    <h3>Talk to us today</h3>
                </div>
                <div>
                    <Button className='btn'>
                    <NavLink to="/contact">Get Started</NavLink>
                    </Button>
                </div>
            </div>
        </section>

        <footer className='main-footer'>
            <div className='container grid grid-four-column'> 
                <div className='footer-about'>
                    <h3>QuickCart</h3>
                    <p>we bring you the latest and greatest in technology and accessories, designed to enhance your everyday life.</p>
                </div>

                <div className='footer-subscribe'>
                    <h3>Subscribe to get the important updates</h3>
                    <form>
                        <input type="email" placeholder='enter your e-mail'/>
                        <input type="submit" value="subscribe" />
                    </form>
                </div>

                <div className= 'footer-social'>
                    <h3>Follow Us</h3>
                    <div className='footer-social--icons'>

                        <div>
                            <a href='https://discord.com/'>
                            <FaDiscord />
                            </a>
                        </div>
                        <div>
                            <a href='https://www.instagram.com/'>
                            <FaInstagram />
                            </a>
                        </div>
                        <div>
                            <a href='https://www.youtube.com/'>
                            <FaYoutube />
                            </a>
                        </div>

                    </div>

                    <div className="footer-contact">
                        <h4>Call Us</h4>
                        <h3>+91<nobr> </nobr>7042040853</h3>
                    </div>
                </div>
            </div>
        </footer>

    </Wrapper>
  )
};

const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }

  .contact-short {
    max-width: 60vw;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    margin-left:300px;
    o

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }


  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

.main-footer {
padding-left:300px
}

.btn {
margin-left:130px;
}

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
        .btn {
        margin-right:130px;
        }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer;
