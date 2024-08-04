import React from 'react'
import { motion } from 'framer-motion';
import './Section.css'
import Resume from '../../assets/Resume.pdf'

const Section1 = () => {
    return (
        <div className='h-[67vh] flex justify-center'>
            <motion.div
                initial={{ opacity: 0, y: 5 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className='w-[80%] mt-[90px] flex justify-center'>
                <div>
                    <div className='text-5xl font-bold text-gray-600 mb-6 flex justify-center'>About Us.</div>
                    <div className='text-center'>
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
                        <div className='mt-10 flex justify-center'>
                            <button class="button type1">
                                <span class="btn-txt">Reach Us -&gt;</span>
                            </button>
                        </div>

                    </div>
                </div>
            </motion.div>

        </div>
    )
}

export default Section1