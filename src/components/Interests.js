import React from 'react'
import { motion } from 'framer-motion'

const Interests = () => {
    return (
        <div className=' mx-[170px] text-slate-800/90 h-[100vh] flex justify-center items-center'>
            <motion.div
                initial={{ opacity: 0, }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.15 }}
                className='text-6xl  justify-center text-center font-bold'>
                Thats all about my technical stuff, let's see what my other <span className='text-indigo-500'>interests</span> are!
            </motion.div>
        </div>
    )
}

export default Interests