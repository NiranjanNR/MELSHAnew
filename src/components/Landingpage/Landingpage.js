import React from 'react'
import './Landingpage.css'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Typewriter from "typewriter-effect";
import Landing from '../../assets/Landing.jpg'
import libra from '../../assets/libra.png'
import git from '../../assets/git.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'



const Landingpage = () => {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorVariant2, setCursorVariant2] = useState("default2");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
    },
    default1: {
      height: 6,
      width: 6,
      x: mousePosition.x - 3,
      y: mousePosition.y - 3,
      backgroundColor: "#4a21ff"
    },
    default2: {
      x: mousePosition.x - 7.5,
      y: mousePosition.y - 7.5,

    },
    text: {
      height: 210,
      width: 210,
      x: mousePosition.x - 150,
      y: mousePosition.y - 150,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
    text2: {
      x: mousePosition.x,
      y: mousePosition.y,
      height: 0,
      width: 0,
      border: 0
    },
    hover: {
      height: 36,
      width: 36,
      x: mousePosition.x - 18,
      y: mousePosition.y - 18,
      backgroundColor: "#00000020",
    },
    hoverborder: {
      height: 36,
      width: 36,
      x: mousePosition.x - 18,
      y: mousePosition.y - 18,
      borderColor: "#00000047",
    }
  }

  const textEnter = () => {
    setCursorVariant("text");
    setCursorVariant2("text2");
  }
  const textLeave = () => {
    setCursorVariant("default");
    setCursorVariant2("default2");
  }
  const cursorhover = () => {
    setCursorVariant("text2");
    setCursorVariant2("hoverborder");
  }
  const cursorhover1 = () => {
    setCursorVariant("text2");
    setCursorVariant2("default1");
  }
  const cursorleave = () => {
    setCursorVariant("default");
    setCursorVariant2("default2");
  }

  return (
    <div className='flex justify-center w-[100%] '>
      <div className='w-[80px] bg--500 mx-[30px] flex justify-center pt-7 fixed top-2 left-0 mt-7'>
        <div className='bg-blac'>
          <div className='text-2xl font-bold' onMouseEnter={cursorhover} onMouseLeave={cursorleave}>M</div>
          <div className='mt-[620px]'>
            <div className='mt-[42px]'><button><img onMouseEnter={cursorhover} onMouseLeave={cursorleave} className='h-[26px] w-[26px]' src={instagram} alt='' /></button></div>
            <div className='mt-[42px]'><button><img onMouseEnter={cursorhover} onMouseLeave={cursorleave} className='h-[26px] w-[26px]' src={twitter} alt='' /></button></div>
          </div>
        </div>
      </div>
      <div className='w-[88%] mx-[0px]'>
        <div className=' tracking-wide font-[300] text-base flex justify-center items-end h-[38vh]'>
          <motion.div className=' flex flex-row-reverse text-black text-center gap-24'>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='flex items-end'>
              <div>
                <div className='text-[20px] ml-2 text-slate-600/70 mb-10 text-left tracking-widest font-bold'>
                </div>
                <div onMouseEnter={textEnter} onMouseLeave={textLeave} className=''>
                  <div className='text-[120px] mb-12 font-bold gupter-bold'>
                    MELSHA
                  </div>
                </div>
                <div className='font-normal'>

                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className='cursor'
            variants={variants}
            animate={cursorVariant}
          />
          <motion.div
            className='cursor_2'
            variants={variants}
            animate={cursorVariant2}
          />
        </div>

      </div>
      <div className='h-[100vh] w-[80px] bg--500 mx-[30px] flex justify-center pt-7 fixed top-2 right-0 mt-7'>
        <div className=''>
          <button className='text-xs  tracking-wide font-normal text-center hover:text-indigo-600' onMouseEnter={cursorhover1} onMouseLeave={cursorleave} >ABOUT</button>
          <button className='text-xs tracking-wide font-normal text-center hover:text-indigo-600' onMouseEnter={cursorhover1} onMouseLeave={cursorleave} >WORKS</button>
          <button className='text-xs tracking-wide font-normal text-center hover:text-indigo-600' onMouseEnter={cursorhover1} onMouseLeave={cursorleave} >CONTACT</button>
          <div className='mt-[600px] '>
            <div className='-rotate-90 tracking-wide text-sm'> <button className='text-indigo-600/90 hover:text-indigo-700 border-indigo-500 transition-all ease-in-out' onMouseEnter={cursorhover1} onMouseLeave={cursorleave}>SERVICES</button></div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default Landingpage