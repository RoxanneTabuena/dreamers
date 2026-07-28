import { Related } from './Related/Related'
import style from './stream.module.css'
import { useParams } from 'react-router'
import { Post } from './Post/Post'
import { Memo } from './Memo/Memo'
import {content, tags} from './content'

// social media feed style component modeled after a stream of conciousness 
export const Stream = () => {
    // obtain tag from router
    const params = useParams()
    const tag = params.tag
    let stream = Object.keys(content)

    // filter posts if tag is present
    if(tag){
        stream = tags[tag].contentIDs
    }
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