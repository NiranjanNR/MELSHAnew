import React from 'react'
import background from '../../assets/background.png'
import { motion } from 'framer-motion';

const Section1 = () => {
    return (
        <div className='flex justify-center'>
            <div>
                <div className='flex gap-x-[180px]'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.95, delay: 0.2 }}
                        className='w-[80%] '>
                        <div className=' text-3xl font-bold mb-2'>ASSISTANCE FOR VISA HANDLING</div>
                        <div className='mb-4'><span className='mt-[80px] text-xl text-indigo-500'>------------------</span></div>
                        <div>
                            We provide smooth and seamless Visa Handling  <span className='text-indigo-500'>Services</span> for
                        </div>
                        <div>
                            <span className='text-indigo-500'>all</span>  the Employees and the Dependent Family members.
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