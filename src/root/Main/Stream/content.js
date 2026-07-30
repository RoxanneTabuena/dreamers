import { ARP } from './Post/posts/ARP'
import { Clients } from './Post/posts/clients'
import { Timezones } from './Post/posts/Timezones'
export const tags = {
    'web' : {
        ID: 0,
        contentIDs: [1,2]
    },
    'automation' : {
        ID: 4,
        contentIDs: [3,5]
    },
    'APIs' : {
        ID: 6,
        contentIDs: [7,8]
    }
}

const web = [
    'I think I love working small business and independent artists so much because there is so much room for creativity. As enterprises grow things inevitably become homogenous. With focus on the individual comes the gift of originality. '
]

const automation = [
    `One of my favorite discoveries of 2026 is using google Apps Script to automate interactions in G suite. Screw companies like zappier that will nickel and dime you to death. I'll take an afternoon, do it myself and never think about it again. `
]

const APIs = [
    `Finally taking the time to learn APIs felt like going outside for the first time. Freedom! Why didn't I study this sooner?`
]
export const content = {
    1: {
        type: `memo`,
        memo: web[0],
    },
    2 : {
        type: `post`,
        content: <ARP/>,
    },
    3 : {
        type: `post`,
        content: <Clients/>,
    },
    5 : {
        type: `memo`,
        content: automation[0],
    },
    7 : {
        type: `memo`,
        content: APIs[0]
    },
    8 : {
        type: `post`,
        content: <Timezones/>
    }

}
