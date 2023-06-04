import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Image from "next/image"
import andyPicture from '../public/AndyProfilePicture.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import {useState, useEffect} from "react"
import { useContext } from 'react';
import { DarkModeContext } from '../pages/DarkModeContext';



export default function Home() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'dark' : ""}>
    <div className='pb-1 bg-offWhite-200 dark:bg-offDark-200 font-bubbles'>
      <Head>
        <title>Andy Huang Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/letter.ico" />
        <style>
</style> 
      </Head>

      <main className='bg-offWhite-200 px-10 md:px-20 lg:px-40 dark:bg-offDark-200'>
        <section className='min-h-screen'>
          <nev className="py-10 mb-12 flex justify-between">
            <h1 className='text-xl dark:text-offWhite-100 font-bold font-mono'></h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={toggleDarkMode} className='cursor-pointer text-xl dark:text-offWhite-100 hover:text-teal-600 dark:hover:text-teal-400' /></li>
              <a href='https://drive.google.com/file/d/1d4t6l9mM2nqCHfiKVYpZvz5VXk4_bgp_/view?usp=sharing'><li className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 hover:from-cyan-400 hover:to-teal-400'> Resume</li></a>
            </ul>
          </nev>
          <dev className="text-center p-10">
            <h2 className='text-6xl py-2 text-teal-500 font-semibold md:text-7xl lg:text-8xl'>Andy Huang</h2>
            <h3 className='text-2xl py-2 md:text-3xl lg:text-4xl dark:text-offWhite-100'>Computer Science Student at Wayne State</h3>
            <p className='text-md py-5 leading-2 text-gray-800 mx-auto max-w-4xl md:text-lg lg:text-2xl lg:leading-8 dark:text-offWhite-100'>
              I&apos;m a CS student in my third year of undergraduate studies, with experience in various programming languages and tools.
              I&apos;m currently looking for an internship/job to gain some experience in said field.
            </p>
          </dev>
          <dev className="text-5xl flex justify-center gap-16 py-3 text-gray-500 dark:text-gray-200">
            <a href='https://www.linkedin.com/in/andy-huang-649046212/' className='hover:text-teal-500'><AiFillLinkedin /></a>
            <a href='https://github.com/AndyHCode' className='hover:text-teal-500'><AiFillGithub /></a>
          </dev>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96 shadow-2xl">
            <Image alt="" src={andyPicture}/>
          </div>
        </section>
        <section>
          <div className='py-8'>
            <div className='shadow-lg rounded-lg p-5 bg-offWhite-100 dark:bg-offDark-100 dark:text-offWhite-100'>
            <h3 className='text-3xl py-1 mt-5 text-center md:text-4xl lg:text-5xl underline'>About Me</h3>
            <p className='text-md py-8 leading-2 text-gray-80 text-center max-w-4xl mx-auto md:text-lg lg:text-2xl'>
             I am an aspiring Computer Science student who possesses an interest 
             in both software and hardware. Over the years, I have gained extensive 
             experience constructing computer towers for acquaintances and relatives, as 
             well as providing assistance in resolving their software-related issues. 
             Additionally, I have amassed four years of expertise in creating 3D CAD models 
             and 2D orthographic drawings for 3D printing or any endeavors. 
            </p>
            </div>
            <div className='py-6'>
            <div className='shadow-lg rounded-lg p-5 bg-offWhite-100 dark:bg-offDark-100 dark:text-offWhite-100'>
            <h3 className='text-3xl py-1 mt-5 text-center md:text-4xl lg:text-5xl underline'>What im currently learning</h3>
            <p className='text-md py-8 leading-2 text-gray-80 text-center max-w-4xl mx-auto md:text-lg lg:text-2xl'>
              Currently im learning about the basic of frontend development with some framework. 
              So mainly focusing on html, css, javascript, react, next.js, and tailwind. For example 
              this <a href='https://github.com/AndyHCode/Portfolio' className='text-cyan-500 hover:text-cyan-400 hover:underline'>portfolio</a> is written using mainly next.js and tailwind!
            </p>
            </div>
            </div>
          </div>
          <div className='xl:flex gap-10 justify-center'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-offWhite-100 dark:bg-offDark-100 dark:text-offWhite-100 md:text-lg lg:text-2xl'>
              <div className='flex justify-center'><Image alt="" src={code} width={100} height={100} /></div>
              <h3 className='text-lg font-bold pt-8 pb-2 md:text-xl lg:text-2xl'>Languages/Tools That I Use</h3>
              <p className='text-gray-800 py-2 dark:text-offWhite-200'><spam className='text-teal-600 dark:text-teal-500'>Programming languages:</spam> C/C++, Python, Java</p>
              <p className='text-gray-800 py-2 dark:text-offWhite-200'><spam className='text-teal-600 dark:text-teal-500'>Markup languages:</spam> LaTex, Markdown</p>
              <p className='text-gray-800 py-2 dark:text-offWhite-200'><spam className='text-teal-600 dark:text-teal-500'>TextEditor:</spam> VsCode/Vim</p>
              <p className='text-gray-800 py-2 dark:text-offWhite-200'><spam className='text-teal-600 dark:text-teal-500'>OS:</spam> Windows/Linux</p>
            </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-offWhite-100 xl:max-w-md dark:bg-offDark-100 dark:text-offWhite-100 md:text-lg lg:text-2xl'>
              <div className='flex justify-center'><Image alt="" src={design} width={100} height={100} /></div>
              <h3 className='text-lg font-bold pt-8 pb-2 md:text-xl lg:text-2xl'>Project: Kanban To-Do App</h3>
              <p className='py-2'>A kanban to-do app that has a built-in login system with renamable columns and customizable themes.</p>
              <h4 className='text-teal-600'>tools I use:</h4>
              <p className='text-gray-800 py-1 dark:text-offWhite-200'>Python</p>
              <p className='text-gray-800 py-1 dark:text-offWhite-200'>CustomTkinter</p>
              <p className='text-gray-800 py-1 pb-5 dark:text-offWhite-200'>PyInstaller</p>
              <a href='https://github.com/AndyHCode/To-Do-Tracker'>
              <button class="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded">
                Open on Github
              </button></a>
          </div>

            <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-offWhite-100 xl:max-w-md dark:bg-offDark-100 dark:text-offWhite-100 md:text-lg lg:text-2xl' >
              <div className='flex justify-center'><Image alt="" src={consulting} width={100} height={100} /></div>
              <h3 className='text-lg font-bold pt-8 pb-2 md:text-xl lg:text-2xl'>Project: Path Finding</h3>
              <p className='py-2'>A path finding program written in C++ using Dijkstra&apos;s algorithm that can find the shortest path from
              two coordinates with blockage which is all displayed on the terminal.</p>
              <h4 className='text-teal-600 dark:text-teal-500'>tools I use:</h4>
              <p className='text-gray-800 py-1 pb-9 dark:text-offWhite-200'>C++</p>
              <a href='https://github.com/AndyHCode/Path-Finding-V2'>
              <button class="bg-teal-500 hover:bg-teal-400 text-white font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-teal-500 rounded">
                Open on Github
              </button></a>
            </div>

            </div>

        </section>
      </main>
    </div>
    </div>
  )
}
