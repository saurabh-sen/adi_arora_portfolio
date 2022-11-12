import React from 'react'
import { CiSearch } from 'react-icons/Ci'
import { GoCalendar } from 'react-icons/Go'
import { HiOutlineUserCircle } from 'react-icons/Hi'
import Image from 'next/image'
import bg from '../../public/Rectangle.png'
import Footer from '../Footer/Footer'

const Blog = () => {
  return (
    <>
      <div className='Blog bg-[#1E1E1E] flex justify-center text-white '>
        {/* Blog Header */}
        <div className="Blog__container sm:w-192 font-semibold sm:text-6xl m-8">
          <div className="Blog__container__header text-6xl mb-12">Checkout my Blogs</div>
          <div className="Blog__container__input mb-3 ">
            <form className="input__container flex bg-white rounded-full px-5 text-black">
              <input type="search" name="search_blogs" id="search_blogs" placeholder='Search more...' className='input__container__input sm:text-xl px-5 py-2 w-full rounded-full outline-none' />
              <span className="input__container__icon sm:text-2xl flex justify-center items-center text-gray-400 hover:cursor-pointer">
                <CiSearch />
              </span>
            </form>
          </div>
        </div>
      </div>
      {/* Blog Body */}
      <div className="Blog__body p-12">
        {/* iterate through the data and render below div */}
        <div className="Blog__body__child my-6 flex flex-wrap">
          <div className="child__image">
            <Image height="30vh" width="70vw" className="sm:w-[25vw] sm:h-[30vh]" src={bg} alt="blog_image" />
          </div>
          <div className="child__text m-4 sm:w-[60vw]">
            <p className="child__text__title font-semibold text text-2xl mb-4">Pepsi was the 6th largest powerful military in the world.</p>
            <p className="child__text__description text-lg mb-4">Not to forget, he did not come from an entrepreneurial background or had lakhs of rupees that he could spend on his next project. He was willing to explore and hustle and not make money on Day 1 in Indiaof Business Studies digitea digitea digitea digitea digitea digitea
              <span className="child__text__description__readmore text-[#009E8B]"> Read More...</span>
            </p>
            <div className="child__text__buttons flex flex-wrap ">
              <span className="child__text__buttons__date  flex justify-center text-white items-center bg-[#009E8B] rounded-full px-2 py-1 mr-4 flex-row mb-4 sm:mb-0">
                <GoCalendar className='mr-2' /> 30 Oct 2022
              </span>
              <span className="child__text__buttons__name  flex justify-center items-center bg-[#009E8B] text-white px-2 py-1 rounded-full">
                <HiOutlineUserCircle className='mr-2 mt-[0.14rem]' />saurabh sen
              </span>
            </div>
          </div>
        </div>


      </div>
      <Footer />
    </>
  )
}

export default Blog