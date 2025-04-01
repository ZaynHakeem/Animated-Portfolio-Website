import React from 'react'
import {motion} from "framer-motion"
import {useInView} from "react-intersection-observer"
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaWhatsapp 
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Form from './Form';

const Contact = () => {

const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.2
      });   
  return (
    <div id='contact'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12'>
        <motion.h2 
            ref={ref}
            initial={{opacity:0, y:-100}}
            animate={inView ? {opacity:1, y:0} : {}}
            transition={{delay:0.3, duration:0.5}}
        className='text-4xl text-white font-bold mb-8'>
            How to reach me
        </motion.h2>
        <motion.p 
            ref={ref}
            initial={{opacity:0, y:-100}}
            animate={inView ? {opacity:1, y:0} : {}}
            transition={{delay:0.3, duration:0.5}}
        className='text-slate-400 mt-4'>
            You can reach me through the following channels:
        </motion.p>
      </div>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='space-y-6'>
            <div className='flex space-x-4 items-center'>

                <div className='bg-purple-400 p-4 rounded-full'>
                    <FaPhone className='text-white w-6 h-6'/>
                </div>
                <div>
                    <p className='text-lg font-medium text-purple-500'>Phone</p>
                    <p className='text-white'>+1 (318)-394-6071</p>
                </div>
            </div>

            <div className='flex space-x-4 items-center'>

                <div className='bg-purple-400 p-4 rounded-full'>
                    <FaEnvelope className='text-white w-6 h-6'/>
                </div>
                <div>
                    <p className='text-lg font-medium text-purple-500'>Email</p>
                    <p className='text-white'>dnyirend@gsumail.gram.edu</p>
                </div>
            </div>

            <div className='flex space-x-4 items-center'>

                <div className='bg-purple-400 p-4 rounded-full'>
                    <FaMapMarkerAlt className='text-white w-6 h-6'/>
                </div>
                <div>
                    <p className='text-lg font-medium text-purple-500'>Adress</p>
                    <p className='text-white'>403 main st, Grambling, LA</p>
                </div>
            </div>
        </div>
        <div className='flex justify-end w-full'>
            <div className='w-full -mt-10'>
                <p className='text-xl text-white mb-4 text-center'>
                Or you can send me a message directly from here.
                </p>
                <Form/>
            </div>
        </div>
      </div>
      {/* Footer */}
        <div className='mt-48 flex justify-between items-center border-t-2 border-purple-500 p-5 text-white'>
        <p>
            © 2025. All rights reserved.  
        </p>
        <p>
            Designed by Dalitso Nyirenda
        </p>
        <div className='flex justify-center space-x-4 text-white mt-4'>
            <a href="https://wa.me/+13183946071" className='hover:text-green-400 cursor-pointer' target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className='w-6 h-6'/> 
            </a>
            <a href="https://twitter.com/ChaosControl68" className='hover:text-gray-400 cursor-pointer' target="_blank" rel="noopener noreferrer">
            <FaSquareXTwitter className='w-6 h-6'/> 
            </a>
            <a href="https://www.instagram.com/tobias.nyirenda_" className='hover:text-pink-500 cursor-pointer' target="_blank" rel="noopener noreferrer">
            <FaInstagram className='w-6 h-6'/> 
            </a>
            <a href="https://www.linkedin.com/in/dalitso-nyirenda" className='hover:text-blue-400 cursor-pointer' target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='w-6 h-6'/> 
            </a>
            <a href="https://github.com/ZaynHakeem" className='hover:text-gray-400 cursor-pointer' target="_blank" rel="noopener noreferrer">
            <FaGithub className='w-6 h-6'/> 
            </a>
        </div>
        </div>
    </div>
  )
}

export default Contact
