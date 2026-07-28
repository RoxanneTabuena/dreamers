import { Home } from './Home/Home' 
import { Nav } from './Nav/Nav' 
import { MenuContext } from '../../MenuContext'
import { useContext } from 'react'
import style from './head.module.css'
export const Head = () => {
        const [menuState, menuDispatch] = useContext(MenuContext)
        const active = menuState.head
        console.log(active)
    return (
        <div className={style.head}>
            <Home/>
            <Nav/>
        </div>
    )
}