'use client'

import * as React from 'react'
import { Button } from './ui/button';
import {ArrowUp} from "lucide-react"
import {motion, useAnimationControls, useScroll} from "framer-motion"

export function TopButton()
{

    const ScrollToTopContainerVariants = {
        hide: { opacity: 0, y: 100 },
        show: { opacity: 1, y: 0 },
    };

    const {scrollYProgress} = useScroll();
    const controls = useAnimationControls();
    const isBrowser = () => typeof window !== undefined;

    function scrollToTop() {
        if(!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    React.useEffect(() => {
        return scrollYProgress.on('change', (latestValue) => {
            if(latestValue > 1/4) {
                controls.start('show');
            }
            else
            {
                controls.start('hide');
            }
        })
    })
    return (
        <motion.button 
            className='fixed bottom-0 right-0 m-5 bg-pearl p-3 rounded-full'
            variants={ScrollToTopContainerVariants}
            initial="hide"
            animate={controls}
            onClick={scrollToTop}><ArrowUp /></motion.button>
    )
}