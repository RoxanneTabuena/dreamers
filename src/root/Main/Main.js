import { Contact } from './Contact/Contact'
import { Form } from './Form/Form'
import { useRef } from 'react'
import { useEffect } from 'react'
import { Outlet } from 'react-router'
import { useContext } from 'react'
import { HeadContext } from '../../HeadContext'
import style from './main.module.css'

export const Main = () => {
    const mainRef = useRef(null)
    const [headState, headDispatch] = useContext(HeadContext)
    const scroll = headState.scroll
    // use head state to scroll to top of main component when home button is triggered
    if(scroll){
        mainRef.current?.scrollTo({ 
            top:0,
            behavior: 'smooth',  
        })
        const action = { type:"TOP" }
        headDispatch(action)
    }

    return (
        <main ref={mainRef} className={style.main}>
            main
            <Outlet/>
            <Contact/>
            {/* <Form/> */}
        </main>
    )
}