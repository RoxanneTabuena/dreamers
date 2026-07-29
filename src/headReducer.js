export const initialHeadState = {
    head : true,
    scroll: false,
};

export function headReducer(state, action) {
switch (action.type) {

    case "LAND": {
    return {
        ...state,
        head: false
    };
    }

    case "HEAD":
    return {
        ...state,
        head: true
    };

    case "SCROLL":
    return {
        ...state,
        scroll: true
    };

    case "TOP":
    return {
        ...state,
        scroll: false
    };


    default:
    return state;
}
}