const INIT_STATE = {
    yourobjectname: []
}
export const cartreducer = (state = INIT_STATE, action) => {

    switch (action.type) {

        case "action.js variable here that you exports":
            return { ...state, yourobjectname: action.payload };
        default:
            return state;
    }
}