import React from 'react'
import { FaInstagram } from 'react-icons/Fa'
import { AiOutlineTwitter } from 'react-icons/Ai'
import { AiFillYoutube } from 'react-icons/Ai'

const Footer = () => {
  return (
    <div className='Footer bg-[#000000] text-white flex justify-center flex-col flex-wrap items-center'>
      <div className='Footer__content__1 sm:w-[40vw] flex flex-col flex-wrap justify-center items-center mb-4 '>
        <p className="Footer__content__text font-semibold text-base m-8">Adi Arora</p>
        <p className="Footer__content__links flex flex-row flex-wrap justify-evenly items-center w-full">
          <span className="Footer__content__links__home">Home</span>
          <span className="Footer__content__links__about">About Us</span>
          <span className="Footer__content__links__blog">Blog</span>
          <span className="Footer__content__links__news">Newsletter</span>
          <span className="Footer__content__links__privacy">Privacy &Policy</span>
        </p>
      </div>
      <div className="Footer__content__2 w-full sm:w-[80vw]">

        <hr className="Footer__content_hr bg-gray-400" />
        <p className="Footer__content__copyright__socials flex flex-wrap flex-col sm:flex-row sm:justify-between justify-center items-center my-4">
          <span className="Footer__content__copyright__socials__copyright">© 2020 Adi Arora. All rights reserved.</span>
          <span className="Footer__content__copyright__socials__socials flex flex-row justify-between w-[15%] text-xl">
            <FaInstagram />
            <AiOutlineTwitter />
            <AiFillYoutube />
          </span>
        </p>

      </div>
    </div>
  )
}

export default Footer