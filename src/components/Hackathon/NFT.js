import React from 'react'
import NFT from '../../assets/NFT.gif'
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
                        className='h-[350px] ' src={NFT} />
                    <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.95 }}
                        className='w-[600px]'>
                        <div className=' text-5xl font-bold mb-4 text-indigo-500'>Pixel Market</div>
                        <div>
                            Runner Up in a Web Development Hackathon at a National level Multifest. Led a 4 member group and won second place for a hackathon called "Code with Consequences". Developed a fully hosted digital art website called "Pixel Market", where a user can view and surf through different NFTs                        </div>
                        <div className='mt-6 '>
                            <a href='https://github.com/NiranjanNR/pixel-market' className='mr-3 px-10 py-4 border-[1.3px] border-indigo-500/60 rounded-lg hover:text-indigo-600 hover:bg-indigo-100/20'>Check it out!</a>
                        </div>

                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Fos