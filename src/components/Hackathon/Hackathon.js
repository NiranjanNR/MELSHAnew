import React from 'react'
import background from '../../assets/background.png'
import { motion } from 'framer-motion';

const Section1 = () => {
    return (
        <div className=' flex  justify-center'>
            <div>
                <div className='flex mt-[60px] gap-x-[180px]'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.95 }}
                        className='w-[80%] '>
                        <div className=' text-5xl font-bold mb-2'>Hackathons.</div>
                        <div className='mb-4'><span className='mt-[80px] text-xl text-indigo-500'>---------</span></div>
                        <div>
                            Let's see what I have done till now. My projects include a mix of <span className='text-indigo-500'>web</span>
                        </div>
                        <div>
                            <span className='text-indigo-500'>apps</span>, there are ones that implement <span className='text-indigo-500'>AI</span> as well. Since AI excited me I
                        </div>
                        <div>
                            tried out projects that integrated <span className='text-indigo-500'>hardware</span> with AI as well.
                        </div>
                    </motion.div>
                    <motion.img
                        initial={{ opacity: 0, }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.05 }}
                        className='h-[89px] mt-[50px]' src={background} />
                </div>
            </div>
        </div>
    )
}

export default Section1