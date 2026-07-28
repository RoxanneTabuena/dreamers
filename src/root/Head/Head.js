import { Home } from './Home/Home' 
import { Nav } from './Nav/Nav' 
import style from './head.module.css'
export const Head = () => {
    return (
        <div className={style.head}>
            <Home/>
            <Nav/>
        </div>
    )
}