import React from 'react'
import Currentavatar from "../assets/Currentavatar.jpg"
import {motion} from "motion/react"
import { useInView } from "react-intersection-observer"

const About = () => {

  const {ref, inView} = useInView({
    triggerOnce: true,
    threshold: 0.2
  })
  return (
    <div id='about' className='text-white py-16'>
      <div className='container mx-auto px-4 text-center'>
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.2 }} 
        className='text-3xl md:text-4xl font-bold mb-8 underline'
      >
        About Me
      </motion.h2>

        <motion.p 
        ref={ref}
        initial={{opacity:0, y:100}}
        animate={inView ? {opacity:1, y:0} : {}}
        transition={{delay:0.5, duration:0.5}}

        className='mb-12 lg:text-xl text-gray-400 text-center'>
          Before you start exploring my world, time to hit the pause button and allow me introduce myself.
        </motion.p>
        <div className='flex flex-col md:flex-row justify-center items-center'>
          <motion.div
          ref={ref}
          initial={{opacity:0, x:-100}}
          animate={inView ? {opacity:1, x:0} : {}}
          transition={{delay:0.6, duration:0.5}}
          className='mb-8 md:mb-0 md:mr-8 flex justify-center'
          >
            <img
              src={Currentavatar}
              alt="Dalitso Nyirenda"
              loading="lazy"
              className='w-1/3 sm:w-1/2 md:w-full'
            />

          </motion.div>
          <motion.p
          ref={ref}
          initial={{opacity:0, x:100}}
          animate={inView ? {opacity:1, x: 0 } : {}}
          transition={{delay:0.6, duration:0.5}} 
          className='md:w-fit lg:text-3xl text-gray-400 px-4 md:px-0 text-base sm:text-lg md:text-xl'>
            Hello there! My name is Dalitso Nyirenda and I'm an aspiring software engineer currently pursuing my degree at Grambling State University. I have a strong desire to excel in all that I do and a passion for learning, growing, and contributing to team-oriented environments.
With a  strong interest in computer science, I bring creativity and user-centered thinking to my work, particularly in UX design. I love crafting intuitive and engaging experiences that not only solve problems but also delight users.
Beyond my academic and technical pursuits, I’m an avid gamer. I enjoy games that challenge intellect, strategy, and creativity, which often inspires me to explore the intersection of gaming and software development. My creativity fuels my passion for innovation, and I’m always looking for opportunities to combine my skills and interests to make a meaningful impact.
Let’s create something amazing together!


          </motion.p>
        </div>

        <div className='flex flex-col sm:flex-row justify-around items-center mt-12 space-x-6 sm:space-x-0'>
          <motion.div 
          ref={ref}
          initial={{opacity:0}}
          animate={inView ? {opacity:1} : {}}
          transition={{delay:1.2, duration:0.3}}
          className='text-center'
          >
            <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>10+</h3>
            <motion.p
            ref={ref}
            initial={{opacity:0, y:100}}
            animate={inView ? {opacity:1, y:0} : {}}
            transition={{delay:1.7, duration:0.5}} 
            className='text-sm sm:text-base text-gray-300 '
            >
              Development Tools & Technologies Used
              </motion.p>
          </motion.div>
        

        
          <motion.div
           ref={ref}
           initial={{opacity:0}}
           animate={inView ? {opacity:1} : {}}
           transition={{delay:1.3, duration:0.3}}
           className='text-center'
          >
            <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>100+</h3>
            <motion.p 
            ref={ref}
            initial={{opacity:0, y:100}}
            animate={inView ? {opacity:1, y:0} : {}}
            transition={{delay:1.8, duration:0.5}} 
            className='text-sm sm:text-base text-gray-300 '
            >
              Games Played & Critically Analyzed for UX & Mechanics
            </motion.p>
          </motion.div>
        

        
          <motion.div
          ref={ref}
          initial={{opacity:0}}
          animate={inView ? {opacity:1} : {}}
          transition={{delay:1.4, duration:0.3}}
          className='text-center'
          >
            <h3 className='text-3xl md:text-8xl font-bold md:my-6 text-purple-500'>1000+</h3>
            <motion.p 
            ref={ref}
            initial={{opacity:0, y:100}}
            animate={inView ? {opacity:1, y:0} : {}}
            transition={{delay:1.9, duration:0.5}} 
            className='text-sm sm:text-base text-gray-300 '
            >
              Lines of Code Written & Debugged
            </motion.p>
          </motion.div>
          
        </div>
      </div>
    </div>
  )
}

export default About
