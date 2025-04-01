import React from 'react'
import { BiGame } from "react-icons/bi";
import {motion} from "motion/react"
import { useInView } from 'react-intersection-observer';

const Services = () => {

    const servicesData = [
        
        {
            title: " Manual Game Testing and Quality Assurance",
            descrption:
            "Providing comprehensive playtesting services to ensure smooth, bug-free gameplay by conducting user testing, analyzing feedback, and iterating on design to improve game mechanics and user experience"
        },
        {
            title: "UX/UI Design",
            descrption:
            "Creating wireframes, prototypes, and design systems that are both functional and visually appealing through the use of user research to iterate on design solutions and enhance user experience."
        },
        {
            title: "Research & Data Analysis",
            descrption:
            "Conducting research in tech or game-related fields to develop new tools, algorithms, or systems by utilizing data analysis skills to extract actionable insights and optimize processes."
        },
        {
            title: "Game Strategy and Design Consultation",
            descrption:
            "Offering strategic advice on game design, mechanics, and balancing to improve user engagement, helping others design experiences that combine creativity, strategy, and intuitive gameplay."
        },
        {
            title: "Technical Consulting and Mentorship",
            descrption:
            "Offering personalized coaching and problem-solving strategies to help students excel in math and SAT preparation by providing guidance on key mathematical concepts, test-taking techniques, and time management to boost scores and confidence."
        },
        {
            title: "Game Storytelling and Narrative Design",
            descrption:
            "Crafting compelling narratives and lore for games, ensuring the story integrates seamlessly with gameplay by designing dialogue systems, branching storylines, and character development to engage players emotionally."
        },
    ];

    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.2
      });
  return (
    <div id='services' className='text-white py-16'>
      <motion.div
      ref={ref}
      initial={{opacity:0, y:50}}
      animate={inView ? {opacity:1, y:0} : {}}
      transition={{duration:0.5}}
      className='container mx-auto px-4 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold underline mb-8'>Services</h2>
        <p className='mb-12 text-gray-400'>
        Whether you’re facing a tough boss battle or a complex project, my inventory of services and skills has the right solutions to get you through.
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {servicesData.map((service,index) => (
                <motion.div
                ref={ref}
                initial={{opacity:0, scale:0.8}}
                animate={inView ? {opacity:1, scale:1} : {opacity:0}}
                transition={{duration:0.5, delay:index * 0.2}}
                key={index}
                className='bg-[#1c1a2b] rounded-lg p-6 text-center hover:shadow-lg hover:shadow-purple-500 transition-shadow duration-300 cursor-pointer'>
                    <BiGame className='text-purple-500 text-4xl sm:text-5xl lg:text-6xl mb-4 mx-auto'/>
                    <h3 className='text-lg sm:text-xl lg:text-2xl font-semibold mb-2'>{service.title}</h3>
                    <p className='text-sm sm:text-base lg:text-lg text-gray-400'>{service.descrption}</p>

                </motion.div>
            ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Services
