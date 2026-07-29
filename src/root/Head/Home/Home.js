import { useContext } from 'react'
import { HeadContext } from '../../../HeadContext'
import style from './home.module.css'
export const Home = () => {
    const [headState, headDispatch] = useContext(HeadContext)
    // use head state to scroll to top of main component when home button is triggered
    const scroll = () => {
        const action = { type:"SCROLL" }
        headDispatch(action)
    }
    return (
        <div onClick={()=>{scroll()}} className={style.home}>
            dreamers only logo
        </div>
    )
}