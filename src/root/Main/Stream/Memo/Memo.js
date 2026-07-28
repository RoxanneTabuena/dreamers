import style from './memo.module.css'
export const Memo = ({content}) => {
    return (
        <div className={style.memo}>
            <p>{content.memo}</p>
        </div>
    )
}