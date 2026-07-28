import { useContext } from 'react'
import { MenuContext } from '../../../../MenuContext'
import { Tag } from '../../Tag/Tag'
import { tags } from '../../Stream/content'
import style from './splash.module.css'
export const Splash = () => {
    const [menuState, menuDispatch ] = useContext(MenuContext)
    const menu = Object.keys(tags).map((t)=>{return <Tag tag={t} key={t}/>})
    return (
        <div className={style.splash}>
            <img src="https://imagehostclub.s3.us-west-1.amazonaws.com/dreamers/logo_2.png" alt="dreamers Only Logo"></img>
            <h1>Dreamers Only</h1>
            <h2>the work and musings of Roxanne Tabuena</h2>
            {menu}
        </div>
    )
}