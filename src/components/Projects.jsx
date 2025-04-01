import React from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.webp'
import {motion} from "motion/react"
import {useInView} from "react-intersection-observer"
import Skills from './Skills'

const projects = () => {

  const projects = [
    {
      id: 1,
      title: 'Dynamic Portfolio Website',
      description: 'Created a responsive portfolio using React, HTML, Tailwind CSS, and Framer Motion with interactive UI elements, boosting engagement by 40%. Optimized for mobile and accessibility.',
      image: project1,
      link: "#"
    },
    {
      id: 2,
      title: 'Facial Recognition System',
      description: 'Developed an AI-powered facial recognition system using Python, OpenCV, and OpenAIClip, achieving 92% accuracy and improving processing speed by 30%.',
      image: project2,
      link: "#"
    },
    {
      id: 3,
      title: 'AI Fake News Detector',
      description: 'Built an AI based fake political news detector by training it with data from kaggle and using Python, TensorFlow, and NLP techniques. Achieved 94% accuracy in detecting fake news.',
      image: project3,
      link: "#"
    },
  ]

  const {ref, inView} = useInView({
          triggerOnce: true,
          threshold: 0.2
        });
  return (
    <div id='projects' className='py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.h2 
        ref={ref}
        initial={{opacity:0, y:100}}
        animate={inView ? {opacity:1, y:0} : {}}
        transition={{delay:0.3, duration:0.5}}
        className='text-4xl text-white underline font-bold text-center mb-12'> Projects </motion.h2>
        <motion.p 
        ref={ref}
        initial={{opacity:0, y:100}}
        animate={inView ? {opacity:1, y:0} : {}}
        transition={{delay:0.5, duration:0.5}}
        className='text-gray-400 text-center mb-12'> 
          Here are some of the projects I have worked on. 
        </motion.p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {projects.map(project => (
            <motion.div 
            ref={ref}
            initial={{opacity:0, y:50}}
            animate={inView ? {opacity:1, y:0} : {}}
            transition={{delay:project.id * 0.2, duration:0.5}}
            key={project.id}
            className='bg-gray-900 p-6 rounded-lg shadow-lg overflow-hidden flex flex-col justify-between'
            >
              <img src={project.image} className='w-full h-48 object-cover'/>
              <div className='p-6'>
              <h3 className='text-xl text-white font-semibold mb-2'>{project.title}</h3>
              <p className='text-slate-400 mb-4'>{project.description}</p>
              <button className='border-2 border-purple-500 text-purple-500 px-4 py-2 rounded-full hover:bg-purple-500 hover:text-white transition'>View Project</button>
              </div>
            </motion.div>
          ))}    
        </div>
      </div>
      <motion.div
      ref={ref}
      initial={{opacity:0, y:100}}
      animate={inView ? {opacity:1, y:0} : {}}
      transition={{delay:0.7, duration:0.5}}
      >
        <Skills/>
      </motion.div>
    </div>
  )
}

export default projects
