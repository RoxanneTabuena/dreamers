import style from './landing.module.css'
import { Stream } from '../Stream/Stream'

export const Landing = () => {
    return (
        <div className={style.landing}>
            <Stream/>
        </div>
    )
}