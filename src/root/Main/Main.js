import { Contact } from './Contact/Contact'
import { Form } from './Form/Form'
import { Outlet } from 'react-router'
import style from './main.module.css'
export const Main = () => {
    return (
        <div className={style.main}>
            main
            <Outlet/>
            <Contact/>
            {/* <Form/> */}
        </div>
    )
}