import style from './fisheye.module.css'
export const Fisheye = () => {
    return (
        <div className={style.fisheye}>
            <h3>Fisheye Nav 5.25</h3>
            <p>Some times the simplest concepts make for the most complicated builds. The amount of documentation that goes into some proposals is enough to make your eyes roll out. Its a series of inter linked articles and you are often wanting to shuffle through and refer back because even for the most lively operations and radical projects, a good thorough proposal is going to be unavoidably boring.</p>
            <p>So I thought oh wouldnt it be cute to incorporate a menu with simple article titles and have them stack above and below the viewport? I wanted it to look like a fisheye magnifying glass searching a small dense text.</p>
            <p>Visual bugs, math, endless custom hooks later here it is. Not even close to perfect</p>
            <a href="https://github.com/RoxanneTabuena/fisheye_nav" aria-label='repo link'>
                <img src="https://imagehostclub.s3.us-west-1.amazonaws.com/dreamers/fisheye_nav.gif"></img>
            </a>
            <p>One good thing that came out of this was a deep understanding of the object intercept library. Super useful tool for interactive builders.</p>
        </div>
    )
}