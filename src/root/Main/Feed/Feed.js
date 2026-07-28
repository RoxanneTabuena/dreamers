import { Related } from './Related/Related'
import style from './feed.module.css'
export const Feed = () => {
    return (
        <div className={style.feed}>
            feed
            <Related/>
        </div>
    )
}