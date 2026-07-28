import { Related } from './Related/Related'
import style from './stream.module.css'
import { useParams } from 'react-router'
import { Post } from './Post/Post'
import { Memo } from './Memo/Memo'
import {content} from './content'

export const Stream = () => {
    let stream = Object.keys(content)
    console.log(stream)
    return (
        <div className={style.stream}>
            {stream.map((e)=>{
                return content[e].type === `post` ?
                            <Post key={e} content={content[e]}/>:
                            <Memo key={e} content={content[e]}/>
                })}
        </div>
    )
}