import React from 'react'
import idea from '../../assets/idea.gif'
import { motion } from 'framer-motion';
import './Ideathon.css';

const Fos = () => {
    return (
        <div className='flex mt-[30px] h-[100vh] justify-center items-center'>
            <div className='grid grid-cols-2 gap-16'>
                <div class="card">
                    <div class="bg"></div>
                    <div class="blob"></div>
                </div>
                <div class="card">
                    <div class="bg"></div>
                    <div class="blob"></div>
                </div>
                <div class="card">
                    <div class="bg"></div>
                    <div class="blob"></div>
                </div>
                <div class="card">
                    <div class="bg"></div>
                    <div class="blob"></div>
                </div>

            </div>
        </div>
    )
}

export default Fos