import style from './clients.module.css'
export const Clients = () => {
    return (
        <div className={style.clients}>
            <h2>Automated Client Records</h2>
            <p>My goal is to get my personal records in one easy place, and spend less time filling out time sheets</p>
            <h3>Step 1: Auto Add Work Calendar Events to a Spreadsheet</h3>
            <p>Google apps script makes it all pretty seamless. Final Code looks something like this:</p>
            <a href="https://imagehostclub.s3.us-west-1.amazonaws.com/dreamers/gist_preview.png">
                <img src="https://imagehostclub.s3.us-west-1.amazonaws.com/dreamers/gist_preview.png" alt="code preview"></img>
            </a>
            <script src="https://gist.github.com/RoxanneTabuena/15bf44a0d542fbc61e407e0db45ffc6e.js"></script>
            <h3>Step 2: Generate Prefilled links based on the Calendar Info</h3>
            <p>Since I dont own the form I get to do some light hacking.</p>
            <p>I use the doc inspector to obtain question ID numbers in order to construct a prefilled link</p>
            <img src="https://imagehostclub.s3.us-west-1.amazonaws.com/dreamers/hacking.png" alt="view of ID#s in inspector"></img>
            <p>the final link formula looks something like this</p>
            <p>=HYPERLINK("https://docs.google.com/forms/d/e/1FAIpQLSfxLITBK53zdTwLbP_2sk7GmqXJB1s4yjcEdNQcq4v9_U_eZw/viewform?entry.REDACTED=Roxanne&entry.1770498899_hour="&G2&"&entry.REDACTED_minute="&H2&"&entry.REDACTED_hour="&I2&"&entry.REDACTED_minute="&J2&"&entry.REDACTED_year="&D2&"&entry.REDACTED_month="&E2&"&entry.REDACTED_day="&F2&"&entry.REDACTED="&A2&"&entry.REDACTED="&L2&"&entry.REDACTED="&R2&"&entry.REDACTED="&S2&"&entry.REDACTED="&T2&"&entry.REDACTED="&U2&"&entry.REDACTED_hour="&N2&"&entry.REDACTED_minute="&O2&"&entry.REDACTED_hour="&P2&"&entry.REDACTED_minute="&Q2&"")</p>
            <p>Now In one place I can keep track of my personal field notes, my submitted hours, and use an easy hyperlink to do the task of logging my hours for me. Easy as pie.</p>
        </div>
    )
}