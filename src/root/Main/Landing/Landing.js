import style from './landing.module.css'
import { Stream } from '../Stream/Stream'
import { Splash } from './Splash/Splash'

export const Landing = () => {
    return (
        <div className={style.landing}>
            <Splash/>
            <Stream/>
        </div>
    )
}