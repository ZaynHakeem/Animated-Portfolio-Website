import React from 'react'
import {motion} from "framer-motion"
import { animate } from 'motion';

const Skills = () => {

const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Deepseek",
    "GPT-3",
    "Tailwind CSS",
    "Framer Motion",
    "Perplexity",
    "Github",
    "Github Copilot",
    "Microsoft Copilot",
    "Microsoft Office",
];

const skillsList = [...skills, ...skills];

const scrollVariants1 = {
    animate: {
        x: [0, -2000],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear",
            },
        },
    },
};  

const scrollVariants2 = {
    animate: {
        x: [-2000, 0],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear",
            },
        },
    },
}; 

  return (
    <div className='text-white py-16'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-8'>
            Technologies I have worked with
        </h2>
        <div className='overflow-hidden relative w-full'>
           <motion.div 
           variants={scrollVariants1}
           animate='animate'
           className='whitespace-nowrap flex space-x-10'>
                {skillsList.map((skill, index) => (
                    <div key={index}
                    className='text-lg bg-gray-800 px-6 py-3 rounded-full inline-block'>
                        {skill}
                    </div>
                    ))}
            </motion.div> 
        </div>
        <div className='overflow-hidden relative w-full mt-5'>
            <motion.div 
             variants={scrollVariants2}
           animate='animate'
            className='whitespace-nowrap flex space-x-10'>
            {skillsList.map((skill, index) => (
                    <div key={index}
                    className='text-lg bg-gray-800 px-6 py-3 rounded-full inline-block'>
                        {skill}
                    </div>
                    ))}
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Skills
