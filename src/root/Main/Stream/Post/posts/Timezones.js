import style from './timezones.module.css'
export const Timezones = () => {
    return (
        <div className={style.timezones}>
            <h2>Timezones 7.24</h2>
            <p>I came to california at basically the worst possible time to get into tech. I was losing hope and I missed my girlfriend. Timezones was my first API integration; a simple mapbox tool displaying the time in different parts of the world.</p>
            <a href="https://timezones-for-lovers.netlify.app/">
                <img src="https://imagehostclub.s3.us-west-1.amazonaws.com/dreamers/timezones_preview.png" alt="preview of the timezones app">
                </img>
            </a>
        </div>
    )
}