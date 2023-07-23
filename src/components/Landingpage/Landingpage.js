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
      height: 300,
      width: 300,
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
    <div className='flex justify-center h-[100vh] w-[100%]'>
      <div className='h-[100vh] w-[80px] bg--500 mx-[30px] flex justify-center pt-7 fixed top-2 left-0'>
        <div className='bg-blac'>
          <div className='text-2xl font-bold' onMouseEnter={cursorhover} onMouseLeave={cursorleave}>N</div>
          <div className='mt-[450px]'>
            <div className='mt-[42px]'><button><img onMouseEnter={cursorhover} onMouseLeave={cursorleave} className='h-[26px] w-[26px]' src={git} alt='' /></button></div>
            <div className='mt-[42px]'><button><img onMouseEnter={cursorhover} onMouseLeave={cursorleave} className='h-[26px] w-[26px]' src={instagram} alt='' /></button></div>
            <div className='mt-[42px]'><button><img onMouseEnter={cursorhover} onMouseLeave={cursorleave} className='h-[26px] w-[26px]' src={twitter} alt='' /></button></div>
            <div className='mt-[42px]'><button><img onMouseEnter={cursorhover} onMouseLeave={cursorleave} className='h-[30px] w-[30px]' src={linkedin} alt='' /></button></div>
          </div>
        </div>
      </div>
      <div className='h-[100vh] w-[88%] mx-[0px]'>
        <div className='h-[8vh] flex items-center justify-center text-indigo-500'>
          ------<img className='h-8 w-8 mx-6' src={libra} alt='' />------
        </div>
        <div className=' tracking-wide font-[300] text-base flex justify-center items-center h-[85vh]'>
          <motion.div className=' flex flex-row-reverse text-black text-center gap-24'>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.95 }}
              className='flex justify-center mb-10'>
              <img className='rounded-xl h-[400px]' alt='' src={Landing} />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.95 }}
              className='flex items-center'>
              <div>
                <div className='text-[20px] ml-2 text-slate-600/70 mb-10 text-left tracking-widest font-bold'>
                  <Typewriter
                    options={{
                      strings: ['N R NIRANJAN'],
                      autoStart: true,
                      loop: true,
                      cursor: '_'
                    }}
                  />
                </div>
                <div onMouseEnter={textEnter} onMouseLeave={textLeave} className=''>
                  <div className='text-[70px] mb-12  font-bold'>
                    Crafting ideas into
                  </div>
                  <div className='text-[70px] mb-10  font-bold'>
                    reality since 2020
                  </div>
                </div>
                <div className='ml-2 flex  text-slate-500'>
                  <div className='w-[500px] text-left'>
                    Passionate programmer with hands on experience in multiple fields like web development, machine learning and Jswings. Constantly looking for opportunities to learn for adding more skills to my arsenal.
                  </div>
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
        <div className='text-2xl tracking-wide flex justify-center text-indigo-500/80 '>
          <div>
            <div className='text-sm'>Scroll</div>
            <div className='text-2xl font-extralight text-center'>l</div>
          </div>
        </div>
      </div>
      <div className='h-[100vh] w-[80px] bg--500 mx-[30px] flex justify-center pt-7 fixed top-2 right-0'>
        <div className=''>
          <button className='text-xs  tracking-wide font-normal text-center hover:text-indigo-600' onMouseEnter={cursorhover1} onMouseLeave={cursorleave} >ABOUT</button>
          <button className='text-xs tracking-wide font-normal text-center hover:text-indigo-600' onMouseEnter={cursorhover1} onMouseLeave={cursorleave} >WORKS</button>
          <button className='text-xs tracking-wide font-normal text-center hover:text-indigo-600' onMouseEnter={cursorhover1} onMouseLeave={cursorleave} >CONTACT</button>
          <div className='mt-[600px] '>
            <div className='-rotate-90 tracking-wide text-sm'>SOUND <button className='text-indigo-600/90 hover:text-indigo-700 border-indigo-500 transition-all ease-in-out' onMouseEnter={cursorhover1} onMouseLeave={cursorleave}>ON</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landingpage