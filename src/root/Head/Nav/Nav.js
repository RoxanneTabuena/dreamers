import style from './nav.module.css'
import { Tag } from '../../Main/Tag/Tag'
import { tags } from '../../Main/Stream/content'
export const Nav = () => {
    const menu = Object.keys(tags).map((t)=>{return <Tag tag={t} key={t}/>})
    return (
        <nav className={style.nav}>
            {menu}
        </nav>
    )
}