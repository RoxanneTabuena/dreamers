import { Head } from './Head/Head'
import { Main } from './Main/Main'
import { Foot } from './Foot/Foot'
import style from './root.module.css'
export const Root = () => {
    return (
    <div className={style.root}>
        <Head/>
        <Main/>
        <Foot/>
    </div>)
}