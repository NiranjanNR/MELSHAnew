import React from 'react'
import './Contact.css'
import background from '../../assets/background.png'
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className='flex mt-10 justify-center'>
            <div>
                <div className='flex gap-x-[150px]'>

                    <motion.img
                        initial={{ opacity: 0, }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.05 }}
                        className='h-[89px] mt-[40px]' src={background} />

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.95, delay: 0.2 }}
                        className='w-[80%] '>
                        <div className=' text-3xl font-bold mb-2'>ANNUAL COMPANY MANAGEMENT</div>
                        <div className='mb-4'><span className='mt-[80px] text-xl text-indigo-500'>------------------</span></div>
                        <div>
                            We provide efficient service for all the annual compliance and </div>
                        <div>
                            renewal of the Mainland company including managing the Renewals,</div>
                        <div>
                            UBO Registrations and External Ministry Approvals.
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Contact