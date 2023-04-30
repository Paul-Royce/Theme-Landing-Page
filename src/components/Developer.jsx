import React from 'react'
import { motion } from "framer-motion";

const Developer = ({closeDeveloper}) => {
  return (
    <motion.div 
        className="rounded top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] duration-200 text-center absolute p-3 bg-blue-300 hover:bg-blue-700  opacity-80 hover:opacity-100  w-11/12 md:w-72 "
        initial={{left: "-20%"}}
        animate={{left: "50%"}}
        exit={{left: "110%"}}
        transition={{duration: .2, repeatType: "reverse"}}
    >
        <h2 className=" tracking-[.2rem] text-xl ">Built by <a className=" duration-300 hover:text-orange-500 hover:tracking-[.26rem]" href="https://github.com/Paul-Royce">Paul</a></h2>
        <button className="bg-orange-300 duration-200 mt-3 text-black p-3 py-1 rounded-xl hover:bg-orange-500 hover:tracking-widest active:tracking-widest" onClick={()=> closeDeveloper(prev => prev = false)}>Close</button>
    </motion.div>
  )
}

export default Developer;