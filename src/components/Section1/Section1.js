import React from 'react'
import { motion } from 'framer-motion';
import './Section.css'
import Resume from '../../assets/Resume.pdf'

const Section1 = () => {
    return (
        <div className='h-[67vh] flex justify-center'>
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.25 }}
                className='w-[80%] mt-[100px] '>
                <div className=' text-5xl font-bold mb-1'>About Me.</div>
                <div className='mb-10'><span className='mt-[80px] text-xl text-indigo-500'>---------</span></div>
                <div className=''>
                    <div>
                        A developer constantly searching for <span className='text-indigo-500'>ideas</span> and ways to implement them.
                    </div>
                    <div>
                        Always trying to <span className='text-indigo-500'>create</span> new and innovative things. Open to learning new
                    </div>
                    <div>
                        technologies which help me create useful projects be it <span className='text-indigo-500'>software</span> or <span className='text-indigo-500'>hardware</span>.
                    </div>
                    <div>
                        Always willing to put in my best efforts for works that excites me!
                    </div>
                    <div className='mt-12'><a href={Resume} download="Resume.pdf" class="btn"> Download Resume</a></div>
                </div>
            </motion.div>

        </div>
    )
}

export default Section1