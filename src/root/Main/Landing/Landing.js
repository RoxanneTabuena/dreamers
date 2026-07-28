import style from './landing.module.css'
import { Stream } from '../Stream/Stream'
export const Landing = () => {
    return (
        <div className={style.landing}>
            <img src="https://imagehostclub.s3.us-west-1.amazonaws.com/dreamers/logo_2.png" alt="dreamers Only Logo"></img>
            <h1>Dreamers Only</h1>
            <h2>the work and musings of Roxanne Tabuena</h2>
            <Stream/>
        </div>
    )
}