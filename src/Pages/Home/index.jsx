import React, { useState, useEffect, lazy, Suspense } from 'react';


//styled
import { Global, Default, Loader } from './style'


//Components
const Header = lazy(() => import('../../Sections/Header'))
const Section1 = lazy(() => import('../../Sections/Section1'))
const Section2 = lazy(() => import('../../Sections/Section2'))
const Section3 = lazy(() => import('../../Sections/Section3'))
const Section4 = lazy(() => import('../../Sections/Section4'))
const Section5 = lazy(() => import('../../Sections/Section5'))
const Section6 = lazy(() => import('../../Sections/Section6'))
const Section7 = lazy(() => import('../../Sections/Section7'))
const Section8 = lazy(() => import('../../Sections/Section8'))

const Home = () => {

    const [changeHeader, setHeader] = useState(false)
    const [animation, setAnimation] = useState(false)

    //Scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [])

    const handleScroll = (event) => {
        let bodyRect = document.body.getBoundingClientRect();
        let top = (bodyRect.top) * (-1);
        let height = event.path[1].innerHeight

        if(top >= height - 100)
        {
            setHeader(true)
            setAnimation(true)

        }
        else
        {
            setHeader(false)
        }
    }

    return (
        <>
            <Suspense fallback={<Loader><div></div><div></div></Loader>}>
                <Global />
                <Default >
                    <Header change={changeHeader}/>
                    <Section1/>
                    <Section2 animation={animation}/>
                    <Section3/>
                    <Section4/>
                    <Section5/>
                    <Section6/>
                    <Section7/>
                    <Section8/>
                </Default>
            </Suspense>
        </>
    )
}

export default Home;