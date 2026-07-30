import { Splash } from './Splash/Splash'
import { Home } from './Home/Home' 
import { Nav } from './Nav/Nav' 
import { HeadContext } from '../../HeadContext'
import { useContext, useState, useEffect, useLocation  } from 'react'
import style from './head.module.css'
export const Head = () => {
    const [headState, headDispatch] = useContext(HeadContext)
    const head = headState.head
    if(!head){
        return <Splash/>
    }
    return (
        <header className={style.head}>
            <Home/>
            <Nav/>
        </header>
    )
}