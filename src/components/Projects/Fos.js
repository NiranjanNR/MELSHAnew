import React from 'react'
import Innovation from '../../assets/Innovation.gif'
import { motion } from 'framer-motion';
const Fos = () => {
    return (
        <div className=' flex  justify-center'>
            <div className=''>
                <div className='flex pb-16 items-center gap-x-[120px] mt-[85px]  border-b-2 border-indigo-500/20'>
                    <motion.img
                        initial={{ opacity: 0, }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.05 }}
                        className='h-[350px] ' src={Innovation} />
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.95 }}
                        className='w-[600px]'>
                        <div className=' text-5xl font-bold mb-4 text-indigo-500'>FOS</div>
                        <div>
                            Worked with a team to come up with an idea that improved the <span className='text-indigo-500'>energy efficiency</span> and user experience of normal light bulbs. The developed working prototype detects what a person is doing and <span className='text-indigo-500'>adjusts</span> the <span className='text-indigo-500'>brightness</span> of the light accordingly, providing a <span className='text-indigo-500'>user convenient</span> and energy efficient alternative for the traditional light bulbs.
                        </div>
                        <div className='mt-6 '>
                            <a href='https://github.com/NiranjanNR/FOS' className='mr-3 px-10 py-4 border-[1.3px] border-indigo-500/60 rounded-lg hover:text-indigo-600 hover:bg-indigo-100/20'>Check it out!</a>
                            <button className='px-10 py-4 border-[1.3px] border-indigo-500/60 rounded-lg hover:text-indigo-600 hover:bg-indigo-100/20'>Research Paper</button>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Fos