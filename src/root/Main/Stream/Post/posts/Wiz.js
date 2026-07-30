import style from './wiz.module.css'
export const Wiz = () => {
    return (
        <div className={style.wiz}>
            <h3>Animated Menu 10.24</h3>
            <p>In summer 2024 I was working on a tech portfolio. It was magic themed, and was going to have a webstore and portals for every reason someone might want to work with me. Mid month I got a job offer and re-directed my attention and resources to making the move to Los Angeles to be with my girlfriend and start this internship. Poor project got abandoned, and my tastes changed by the time I was ready to look at putting together a protfolio. Poor thing never stood a chance. The menu looked great though and I hope to still one day use this for another project.</p>
            <a href="https://github.com/RoxanneTabuena/tabuenasphere" aria-label='repo link'>
                <img src="https://imagehostclub.s3.us-west-1.amazonaws.com/dreamers/menu.gif" alt="animated menu demo"></img>
            </a>
            <h3>How did she do that?!?</h3>
            <p>Seems like it would be super heavy right?</p>
            <p>wrong.</p>
            <p>I did the animations myself and exported them to png files. I converted them to gifs, and then layered the gifs ontop of eachother. The logic is based in React triggered using cursor placement. Meaning that based on where your mouse is react is either serving you a static image or a gif. Pretty nifty. </p>
        </div>
    )
}