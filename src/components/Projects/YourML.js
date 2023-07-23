import React from 'react'
import ML from '../../assets/ML.gif'
import { motion } from 'framer-motion';
const Fos = () => {
    return (
        <div className='flex  justify-center'>
            <div className=''>
                <div className='flex items-center gap-x-[120px] mt-[55px] pb-16  '>
                    <motion.img
                        initial={{ opacity: 0, }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.05 }}
                        className='h-[350px] ' src={ML} />
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.95 }}
                        className='w-[600px]'>
                        <div className=' text-5xl font-bold mb-4 text-indigo-500'>YourML</div>

                        <div>
                            YourML was implemented based on an idea that I had which wanted to help anyone to create ML models of their own <span className='text-indigo-500'>without</span> learning python or machine learning basics. <span className='text-indigo-500'>This zero code</span> platform offers an initial dataset analysis and generates a pickle file that encapsulates the <span className='text-indigo-500'>optimally trained</span> model based on the provided dataset input.
                        </div>
                        <div className='mt-6'><a href='https://github.com/NiranjanNR/YourML' className='px-10 py-4 border-[1.3px] border-indigo-500/60 rounded-lg hover:text-indigo-600 hover:bg-indigo-100/20'>Check it out!</a></div>

                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Fos