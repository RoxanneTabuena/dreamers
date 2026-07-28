import { NavLink } from 'react-router'
import style from './tag.module.css'
export const Tag = ({tag}) => {
    return (
        <div className={style.tag}>
            <NavLink to={`/${tag}`}>{tag}</NavLink>
        </div>
    )
}