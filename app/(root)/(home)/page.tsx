'use client'

import React from 'react'
import { Projects } from '@/components/Projects'
import NavBar from '@/components/NavBar'
import { Skills } from '@/components/Skills'
import { Contact } from '@/components/Contact'
import { TopButton } from '@/components/scrollTop'
import {motion} from "framer-motion"
  
const Home = () => {
  return (
    <div className='flex flex-col scroll-smooth'>
		<TopButton />
		<section className='flex-start flex-col h-screen w-full xl:snap-start cursor-default' id='landing_page'>
			<NavBar/>
			<motion.div
			initial="hidden"
			animate="visible"
			variants={
				{
					hidden: {
						scale: .8,
						opacity: 0
					},
					visible: {
						scale: 1,
						opacity: 1,
						transition: {
							delay: .2
						}
					},
				}
			}
			className='flex-center relative min-h-[274px] w-full flex-col top-[7rem] text-center'>
				<h1 className="heading1 text-center text-gradient_dark-pearl pb-2">Aditya Singh</h1>
				<h2 className='heading2 mb-6 text-center text-pearl'>Software Developer</h2>
			</motion.div>
		</section>

        <section className='xl:h-screen paddings w-full section_align xl:snap-start' id='projects_page'>
			<motion.div
			className='xl:m-10 flex-start relative w-full flex-col top-0 gap-y-5 sm:top-0'>
				<h1 className="heading2 text-center text-gradient_dark-pearl pb-2">Projects</h1>
				<div className="project_style absolute"></div>
                <Projects/>
            </motion.div>
		</section>

		<section className='xl:h-screen paddings w-full section_align xl:snap-start' id='skills_page'>
			<div className='xl:m-10 flex relative w-full flex-col top-0 gap-y-5 sm:top-0'>
				<h1 className="heading2 flex-start text-center text-gradient_dark-pearl pb-2">Skills</h1>
                <Skills/>
            </div>
		</section>

		<section className='xl:h-screen paddings w-full section_align xl:snap-start' id='contact_page'>
			<div className='xl:m-10 flex relative w-full flex-col top-0 gap-y-5 sm:top-0'>
				<h1 className="heading2 flex-start text-center text-gradient_dark-pearl pb-2">Contact</h1>
                <Contact />
            </div>
		</section>


    </div>
  )
}

export default Home