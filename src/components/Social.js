import React from 'react'
import '../assets/css/social.css'
import { FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Social = () => {
  return (
    <div>
        <ul class="wrapper">
    <li class="icon facebook">
        <span class="tooltip">Facebook</span>
        <span><FaFacebookF/></span>
    </li>
    <li class="icon twitter">
        <span class="tooltip">Twitter</span>
        <span><AiOutlineTwitter/></span>
    </li>
    <li class="icon instagram">
        <span class="tooltip">Instagram</span>
        <span><AiFillInstagram/></span>
    </li>
</ul>
    </div>
  )
}

export default Social