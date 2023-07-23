import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <div className='h-[100vh] flex items-center justify-center'>
            <div>
                <div>
                    <div className='text-5xl font-bold text-slate-800/90 text-center mb-6'>
                        Send me a <span className='text-indigo-500'>message!</span>
                    </div>
                    <div className='text-xl font-normal text-slate-800/90 text-center'>
                        Got a question or proposal, or just want<br />
                        to say hello? Go ahead.
                    </div>
                </div>
                <div>
                    <div className=' flex justify-center items-center w-[100%]'>
                        <div className="input-container ">
                            <input placeholder="Enter your Name" className="input-field" type="text" />
                            <label for="input-field" className="input-label">Enter your Name</label>
                            <span className="input-highlight"></span>
                        </div>
                        <div className="input-container ">
                            <input placeholder="Enter your email" className="input-field" type="text" />
                            <label for="input-field" className="input-label">Enter your email</label>
                            <span className="input-highlight"></span>
                        </div>
                    </div>

                    <div className="input-container">
                        <input placeholder="Enter your message" className="input-field" type="text" />
                        <label for="input-field" className="input-label">Enter your message</label>
                        <span className="input-highlight"></span>
                    </div>
                </div>
                <div className='mt-20 flex justify-center'>
                    <button class="button type1">
                        <span class="btn-txt">Shoot -&gt;</span>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Contact