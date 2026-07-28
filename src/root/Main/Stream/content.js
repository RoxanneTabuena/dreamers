export const content = {
    1: {
        type: `memo`,
        memo: `first memo`,
    },
    2 : {
        type: `post`,
        content: [
            <p>x</p>, <p>y</p>, <img src="https://imagehostclub.s3.us-west-1.amazonaws.com/mobile_demo.gif" alt="mobile demo"></img>
        ],
    },
    3 : {
        type: `post`,
        content: [
            <p>x</p>, <p>y</p>, <img src="https://imagehostclub.s3.us-west-1.amazonaws.com/mobile_demo.gif" alt="mobile demo"></img>
        ],
    },
}

export const tags = {
    'first' : {
        ID: 0,
        contentIDs: [1,2]
    }
}