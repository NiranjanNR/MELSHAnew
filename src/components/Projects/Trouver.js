import React from 'react'
import Trouver from '../../assets/Trouver.gif'
import { motion } from 'framer-motion';
const Fos = () => {
    return (
        <div className='flex  justify-center'>
            <div className=''>
                <div className='flex pb-16 items-center gap-x-[120px] mt-[55px] border-b-2 border-indigo-500/20'>
                    <motion.img
                        initial={{ opacity: 0, }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.05 }}
                        className='h-[350px] ' src={Trouver} />
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.95 }}
                        className='w-[600px]'>
                        <div className=' text-5xl font-bold mb-4 text-indigo-500'>Trouver</div>
                        <div>
                            I worked as a part of a 5 member team and developed a <span className='text-indigo-500'>web application</span> that tackles the problem of students and people near Amrita School of Engineering, Amritapuri being unaware of the <span className='text-indigo-500'>medical facilities</span> near them. This application integrates the use of Google Maps as well as EmailJS to help improve the users experience.
                        </div>
                        <div className='mt-6'><a href='https://github.com/NiranjanNR/Trouver' className='px-10 py-4 border-[1.3px] border-indigo-500/60 rounded-lg hover:text-indigo-600 hover:bg-indigo-100/20'>Check it out!</a></div>

                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Fos