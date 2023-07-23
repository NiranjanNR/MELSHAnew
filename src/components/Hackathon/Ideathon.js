import React from 'react'
import idea from '../../assets/idea.gif'
import { motion } from 'framer-motion';
const Fos = () => {
    return (
        <div className='flex  justify-center'>
            <div className=''>
                <div className='flex pb-16 items-center gap-x-[120px] mt-[55px] '>
                    <motion.img
                        initial={{ opacity: 0, }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.05 }}
                        className='h-[350px] ' src={idea} />
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.95 }}
                        className='w-[600px]'>
                        <div className=' text-5xl font-bold mb-4 text-indigo-500'>Udaan</div>
                        <div>
                            Qualified to the semi finals in an ideathon conducted by NIT Calicut. This included us pitching our idea of Trouver with an expanded take where we thought of expanding the website to restaurants and other basic services.
                        </div>
                        <div className='mt-6'><a href='https://github.com/NiranjanNR/Trouver' className='px-10 py-4 border-[1.3px] border-indigo-500/60 rounded-lg hover:text-indigo-600 hover:bg-indigo-100/20'>Check it out!</a></div>

                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Fos