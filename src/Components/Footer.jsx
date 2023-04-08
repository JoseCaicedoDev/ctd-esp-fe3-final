import React from 'react'
import { Outlet } from "react-router-dom"
import imgDH from '../assets/DH.png'
import iconFacebook from '../assets/ico-facebook.png'
import iconInstragram from '../assets/ico-instagram.png'
import iconWhatsapp from '../assets/ico-whatsapp.png'
import iconTiktok from '../assets/ico-tiktok.png'


const Footer = () => {
  return (
    <>
      <Outlet />
      <footer className='mt-6'>
        <p className='bg-gray-200 dark:bg-red-500 w-full flex
        justify-center h-11 font-semibold dark:text-white'>Powered by</p>
        <div className='flex items-center justify-around
        py-2'>
          <img src={imgDH} alt='DH-logo'
            className='w-1/5' />
          <div className='flex gap-4'>
            <a href="#" target='_blank'>
              <img src={iconFacebook} alt='icon facebook'
                className='bg-gray-500 w-6 h-6
                rounded-sm' />
            </a>
            <a href="#" target='_blank'>
              <img src={iconInstragram} alt='icon instragram'
                className='bg-gray-500 w-6 h-6 rounded-sm' />
            </a>
            <a href="#" target='_blank'>
              <img src={iconWhatsapp} alt='icon whatsapp'
                className='bg-gray-500 w-6 h-6 rounded-sm' />
            </a>
            <a href="#" target='_blank'>
              <img src={iconTiktok} alt='icon tiktok'
                className='bg-gray-500 w-6 h-6 rounded-sm' />
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
