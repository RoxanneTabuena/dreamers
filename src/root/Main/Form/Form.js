import { useState } from 'react'
import { service_id, template_id, public_key } from "./keys"
import emailjs from 'emailjs-com'
import style from './form.module.css'

export const Form = () => {
    const [ name, setName ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ preferred, setPreferred ] = useState('')
    const [ email, setEmail ] = useState('')
    const [alertActive, setAlertActive] = useState(false)
    const [outcome, setOutcome] = useState('success')



    const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(service_id, template_id, e.target, public_key)
    .then((result) => {
        setOutcome('success')
        setAlertActive(true)
    }, (error) => {
        setOutcome('failure')
        setAlertActive(true)
        console.log(error.text);
    });
    }


    return (
        <form onSubmit={handleSubmit} className={style.form}>
            <input type='hidden' id="title" value="GENERAL"/>
            {/* consent, not a robot */}
            <button type='submit'>Submit</button>
        </form>
    )
}