export const initialMenuState = {
    head : false
};

export function menuReducer(state, action) {
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

    default:
    return state;
}
}