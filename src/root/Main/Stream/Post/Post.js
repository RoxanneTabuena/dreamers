import style from './post.module.css'
export const Post = ({content}) => {
    return (
        <div className={style.post}>
            {content.content}
        </div>
    )
}