import Image from 'next/image'
import React from 'react'

const NavBar = () => {

    function scrollToElement(elementId: string)
    {
        const element = document.getElementById(elementId)
        if (element)
        {
            element.scrollIntoView({behavior: "smooth"})
        }
    }

  return (
        <nav className='flex-center top-0 z-50 w-full py-7 text-pearl text-xl'>
            <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16'>
                <span className='cursor-pointer' onClick={() => scrollToElement('landing_page')}>
                    <Image 
                        src= '/google.svg'
                        alt ='logo'
                        width={35}
                        height={30}
                    />
                </span>

                <Image 
                        src= '/hamburger.svg'
                        alt ='logo'
                        width={35}
                        height={30}
                        className='block 2md:hidden'
                />

                <ul className='flex-between gap-x-3 max-2md:hidden md:gap-x-10 '>
                    <li className='nav_text'>
                    <span className='cursor-pointer' onClick={() => scrollToElement('projects_page')}>
                            Projects
                        </span>
                    </li>

                    <li className='nav_text'>
                    <span className='cursor-pointer' onClick={() => scrollToElement('skills_page')}>
                            Skills
                        </span>
                    </li>

                    <li className='nav_text'>
                    <span className='cursor-pointer' onClick={() => scrollToElement('contact_page')}>
                            Contact
                        </span>
                    </li>
                </ul>
            </div>
        </nav>
  )
}

export default NavBar