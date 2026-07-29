import { Home } from './Home/Home' 
import { Nav } from './Nav/Nav' 
import { HeadContext } from '../../HeadContext'
import { useContext } from 'react'
import style from './head.module.css'
export const Head = () => {
        // display only when landing not visible
        const [headState, headDispatch] = useContext(HeadContext)
        const active = headState.head
    return (
        <header className={style.head}>
            <Home/>
            <Nav/>
        </header>
    )
}