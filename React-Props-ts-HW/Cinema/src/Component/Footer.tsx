import React from 'react'
import  BsSnapchat from 'react-icons/bs';
import  AiOutlineWhatsApp from 'react-icons/ai';
import  FaTwitter  from 'react-icons/fa';
import AiFillInstagram from 'react-icons/ai';

function Footer() {
  return (
    <footer className='footer'>
        <ul className='footerUl'>
            <li><BsSnapchat/></li>
            <li><AiOutlineWhatsApp/></li>
            <li><FaTwitter/></li>
            <li><AiFillInstagram/></li>
        </ul>
    </footer>
  )
}

export default Footer